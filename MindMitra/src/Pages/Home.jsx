import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section id="home" className="bg-white text-gray-900">
      <div className="min-h-screen w-full px-4 sm:px-8 md:px-16 py-16 pt-32 flex items-center justify-center">
        <div className="flex flex-col w-full max-w-screen-xl space-y-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8
           hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
            <div className="text-center lg:text-left pt-10 ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                 Welcome to
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-2 text-blue-600">
                MindMitra
                <h1 className="  text-blue-600 sm:text-2xl md:text-4xl">
                  Your AI Companion for Mental Health
                </h1>
              </h1>
            </div>
            <div className="flex justify-center ">
              <img
                src="/People.png"
                alt="Home"
                className="w-40 sm:w-56 md:w-80 h-auto object-contain"
              />
            </div>
          </div>
          <div className="text-center lg:text-left hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              💡 Our Core Objective
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
              At U-Matter, our mission is simple yet profound — to make mental
              health support accessible, non-judgmental, and always available.
              We believe that everyone deserves a safe space to share, reflect,
              and heal, and we're building technology to make that a reality.
            </p>
          </div>
          <div className="text-center lg:text-left hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
            <p className="text-2xl sm:text-xl md:text-3xl font-bold">
              Our AI-powered chatbot acts as your compassionate companion,
              designed to:
            </p>
            <ul className=" list-disc list-inside text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
              <li className="mt-2">
                {" "}
                Provide a safe, anonymous space for you to express your feelings
              </li>
              <li className="mt-2">
                {" "}
                Engage in meaningful conversations that help you reflect and
                grow
              </li>
              <li className="mt-2">
                {" "}
                Offer resources and support tailored to your unique needs
              </li>
              <li className="mt-2">
                {" "}
                Foster a community of understanding and empathy
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
            <p className="text-2xl sm:text-xl md:text-3xl font-bold">
              💬 Why a Chatbot for Mental Health?
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
              In a world where stress, burnout, and emotional challenges are
              increasingly common, many people hesitate to reach out for help
              due to stigma, time constraints, or lack of access.
            </p>
            <p className="text-2xl pt-3 sm:text-xl md:text-3xl font-bold">
              Here's how our chatbot bridges that gap:
            </p>
            <ul className=" list-disc list-inside text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
              <li className="mt-2">
                {" "}
                <b>Instant Access:</b> No appointments, no waiting. Just start
                the chat.
              </li>
              <li className="mt-2">
                {" "}
                <b>Private & Confidential:</b> Talk openly, without fear of
                being judged.
              </li>
              <li className="mt-2">
                {" "}
                <b>Evidence-Based Support:</b> Our responses are crafted based
                on psychological frameworks like CBT, mindfulness, and emotional
                intelligence.
              </li>
              <li className="mt-2">
                {" "}
                <b>Guided Self-Help:</b> Includes journaling prompts, breathing
                exercises, daily check-ins, and mood tracking.
              </li>
            </ul>
            <p className="text-lg sm:text-xl md:text-2xl font-bold  mt-4">
              Whether you're feeling overwhelmed, anxious, lonely, or just need
              someone to talk to, We are here for you 24x7.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start ">
            <Link
              className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-3 rounded-xl font-semibold text-white shadow-md"
              to="/chat"
            >
              Click Here to Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
