import { useState, useRef, useEffect, useContext } from "react";
import { VscSend } from "react-icons/vsc";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import instance from "../Api/FastAPI";
import { formatAIResponse } from "../utils/formatResponse";
import { AuthContext } from "../Pages/AuthContext";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const Chat = () => {
  const { authToken, userId, username } = useContext(AuthContext);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showTopicGrid, setShowTopicGrid] = useState(true);
  const [listening, setListening] = useState(false);

  const chatContainerRef = useRef(null);
  const navigate = useNavigate();
  const recognitionRef = useRef(null);
  const sendTimeoutRef = useRef(null);

  useEffect(() => {
    if (!authToken || !userId) {
      alert("You must be logged in to access the chat.");
      navigate("/login");
    }
  }, [authToken, userId, navigate]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setShowTopicGrid(false);
    sendMessage(prompt);
  };

  const sendMessage = async (text) => {
    const userMsg = { type: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setIsTyping(true);

    try {
      const res = await instance.post("/chat", {
        session_id: userId,
        query: text,
      });

      const aiText = res.data.response;

      setTimeout(() => {
        setIsTyping(false);
        typeAIMessage(aiText);
      }, 80);
    } catch (err) {
      console.error("Error fetching AI response:", err);
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "⚠️ Sorry, something went wrong. Please try again.",
        },
      ]);
      setIsTyping(false);
    }
  };

  const typeAIMessage = (fullText) => {
    let i = 0;
    const typingMsg = { type: "ai", text: "" };
    setMessages((prev) => [...prev, typingMsg]);

    const interval = setInterval(() => {
      if (i < fullText.length) {
        typingMsg.text += fullText[i];
        i++;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...typingMsg };
          return updated;
        });
      } else {
        clearInterval(interval);
      }
    }, 5);
  };

  // Voice recognition setup
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setPrompt(transcript);

        if (sendTimeoutRef.current) {
          clearTimeout(sendTimeoutRef.current);
          sendTimeoutRef.current = null;
        }
      };

      recognitionRef.current.onend = () => {
        setListening(false);

        sendTimeoutRef.current = setTimeout(() => {
          if (prompt.trim()) {
            setShowTopicGrid(false);
            sendMessage(prompt.trim());
            setPrompt("");
          }
        }, 3000);
      };
    } else {
      console.warn("Speech Recognition API not supported in this browser.");
    }
  }, [prompt]);

  const toggleListening = () => {
    if (!recognitionRef.current)
      return alert("Voice recognition not supported.");
    if (!listening) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const topics = [
    { emoji: "😟", label: "Anxiety", desc: "Calm racing thoughts and find peace" },
    { emoji: "😌", label: "Stress Relief", desc: "Reduce tension & relax your mind" },
    { emoji: "💤", label: "Sleep Issues", desc: "Tips for restful, deep sleep" },
    { emoji: "💪", label: "Confidence", desc: "Boost your self-esteem & courage" },
    { emoji: "❤️", label: "Relationships", desc: "Navigate love & friendships" },
    { emoji: "🌟", label: "Motivation", desc: "Get inspired & stay productive" },
  ];



  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900 pt-16">
      <div
        className="w-full flex items-center justify-center px-4 sm:px-8 md:px-16 py-4"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <div className="flex flex-col w-full max-w-3xl rounded-2xl bg-white shadow-lg overflow-hidden">
          <div
            ref={chatContainerRef}
            className="flex flex-col space-y-4 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-gray-400"
            style={{ height: "calc(75vh - 80px)" }}
          >
            {showTopicGrid && messages.length === 0 ? (
              <div className="flex flex-col items-center text-center space-y-4">
                <h1 className="text-xl sm:text-2xl font-light text-gray-600">
                  👋 Hey {username || "Friend"}, welcome back!
                  <br />
                  What’s on your mind today?
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-6">
                  {topics.map((t, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowTopicGrid(false);
                        sendMessage(`Help me with ${t.label.toLowerCase()}.`);
                      }}
                      className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-xl rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 animate-fadeIn"
                      style={{
                        animationDelay: `${idx * 0.1}s`,
                        animationFillMode: "backwards",
                      }}
                    >
                      <span className="text-4xl">{t.emoji}</span>
                      <span className="text-lg font-semibold text-gray-800 mt-3">
                        {t.label}
                      </span>
                      <span className="text-sm text-gray-500 text-center mt-1">
                        {t.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 text-sm sm:text-base leading-relaxed shadow-sm ${
                        msg.type === "user"
                          ? "bg-blue-500 text-white rounded-tl-xl rounded-bl-xl rounded-br-sm"
                          : "bg-gray-100 text-gray-900 rounded-tr-xl rounded-br-xl rounded-bl-sm"
                      }`}
                    >
                      {msg.type === "ai"
                        ? formatAIResponse(msg.text)
                        : msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-500 rounded-tr-xl rounded-br-xl rounded-bl-sm px-4 py-2 shadow-sm flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="border-t border-gray-200 p-4 bg-white flex items-center justify-between space-x-4">
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm space-x-2 flex-1"
            >
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2 rounded-full transition ${
                  listening ? "bg-red-100" : "hover:bg-blue-100"
                }`}
              >
                {listening ? (
                  <BsMicMuteFill className="text-xl text-red-500" />
                ) : (
                  <BsMicFill className="text-xl text-blue-600" />
                )}
              </button>

              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type or speak your message..."
                className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 outline-none px-2"
              />
              <button
                type="submit"
                className="p-2 rounded-full hover:bg-blue-100 transition"
              >
                <VscSend className="text-2xl text-blue-600 hover:text-blue-800 transition" />
              </button>
            </form>


          </div>
        </div>
      </div>
    </section>
  );
};
