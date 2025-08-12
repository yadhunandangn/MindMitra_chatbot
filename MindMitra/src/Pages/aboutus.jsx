import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <section id="about" className="bg-white text-gray-900 min-h-screen py-16 px-4 sm:px-8 md:px-16 pt-32 flex items-center justify-center">
      <div className="flex flex-col w-full max-w-screen-xl space-y-10">

        {/* Heading */}
        <div className="text-center lg:text-left hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Mind</span>
            <span className="text-green-500">Mitra</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
            Your trusted companion for mental health support, emotional well-being, and personal growth. We’re here to ensure no one has to struggle alone.
          </p>
        </div>

        {/* Our Mission */}
        <div className="hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
            To make mental wellness accessible, empathetic, and stigma-free. MindMitra empowers individuals with tools, resources, and compassionate support to navigate life’s challenges confidently.
          </p>
        </div>

        {/* Our Story */}
        <div className="hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Story</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
            Born from the idea that mental health help should be as easy as sending a text, MindMitra blends technology with empathy — a safe, judgment-free space inspired by Indian cultural values of community and care.
          </p>
        </div>

        {/* What We Do */}
        <div className="hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 space-y-2">
            <li>24/7 AI-powered emotional support and conversation</li>
            <li>Mood tracking and progress monitoring</li>
            <li>Personalized self-help exercises and journaling prompts</li>
            <li>Curated resources and therapist referrals</li>
            <li>Guidance based on CBT, mindfulness, and positive psychology</li>
          </ul>
        </div>

        {/* Core Values */}
        <div className="hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 mb-4">Core Values</h2>
          <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 space-y-2">
            <li>Empathy – Listening without judgment</li>
            <li>Confidentiality – Your privacy is our priority</li>
            <li>Accessibility – Help for everyone, anywhere</li>
            <li>Inclusivity – Welcoming all voices and experiences</li>
            <li>Innovation – Blending science and technology for mental wellness</li>
          </ul>
        </div>

        {/* Why It Matters */}
        <div className="hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-4">Why It Matters</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Millions in India silently struggle with mental health challenges. Stigma and lack of resources prevent many from seeking help. MindMitra bridges this gap — instantly, privately, and without judgment.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
            Because everyone deserves to be heard, supported, and valued.
          </p>
        </div>

        {/* Testimonials */}
        <div className="hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500 mb-4">What People Say</h2>
          <blockquote className="italic text-gray-700 mb-4">
            “MindMitra helped me through one of the hardest times in my life. It was like talking to a friend who truly understood.”
          </blockquote>
          <blockquote className="italic text-gray-700">
            “I love how easy it is to just open the app and have a safe space to vent, reflect, and feel heard.”
          </blockquote>
        </div>

        {/* Call to Action */}
        <div className="hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-blue-50 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">Start Your Journey Today</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Don’t wait for the “right moment” to take care of your mental health. Start a conversation with MindMitra now and take your first step towards emotional well-being.
          </p>
          <Link
            to="/chat"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300"
          >
            Chat with MindMitra
          </Link>
        </div>

      </div>
    </section>
  );
};
