function toggleChat() {
  const chat = document.getElementById("chatContainer");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("You", message);
  input.value = "";

  const response = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: "user-123",
      query: message
    })
  });

  const data = await response.json();
  appendMessage("Bot", data.response);
}

function appendMessage(role, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${role}:</strong> ${text}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}
