import React from "react";
import { Link } from "react-router-dom";
export const Blog = () => {
  return (
    <section className=" w-full backdrop-blur-lg bg-white/70 border-b border-gray-300">
      <div className="min-h-screen w-full px-4 sm:px-8 md:px-16 py-16 pt-32 flex items-center justify-center">
        <div className="flex flex-col w-full max-w-screen-xl space-y-10">
          <div className="text-center hover:py-0.5 transition-all duration-300 shadow-md rounded-2xl p-6 bg-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
              Welcome to the Blog
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
              Here you will find articles and resources related to mental
              health, wellness, and self-care.
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse text-left hover:py-0.5 hover:border-5 border-b-gray-800 transition-all duration-300 shadow-md rounded-2xl bg-white">
            <div className="p-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-black">
                You Are Not Alone: Breaking the Silence Around Mental Health
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                Mental health is a topic that has long been shrouded in stigma
                and silence. Many people suffer in silence, feeling isolated and
                alone in their struggles. But the truth is, you are not alone.
                Millions of people around the world face mental health
                challenges every day, and it’s time to break the silence and
                start talking about it.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                At MindMitra, we believe that mental health is just as important
                as physical health. We are committed to providing a safe space
                for individuals to share their experiences, seek support, and
                find resources to help them on their journey to mental wellness.
                <span className="font-normal text-blue-500">
                  <Link to="/Blog1">Read more...</Link>
                </span>
              </p>
            </div>
            <div className="p-6 md:p-10 lg:rounded-2xl overflow-hidden">
              <img
                src="/blog1.png"
                alt="Blog 1"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse text-left hover:py-0.5 hover:border-5 border-b-gray-800 transition-all duration-300 shadow-md rounded-2xl bg-white">
            <div className="p-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-black">
                5-Minute Mindfulness: Quick Practices for Busy Lives
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                In our fast-paced world, finding time to slow down can feel
                impossible. But mindfulness doesn’t have to mean hours of
                meditation or a perfect morning routine. Even five minutes a day
                can help you reduce stress, sharpen focus, and bring a sense of
                calm to your daily life.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                At MindMitra, we believe small, mindful moments can make a big
                difference. From simple breathing exercises to quick gratitude
                check-ins, our guided tips help you pause, recharge, and face
                your day with a clearer mind.
                <span className="font-normal text-blue-500">
                  <Link to="/Blog2">Read more...</Link>
                </span>
              </p>
            </div>
            <div className="p-6 md:p-10 lg:rounded-2xl overflow-hidden">
              <img
                src="/blog2.png"
                alt="Blog 2"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse text-left hover:py-0.5 hover:border-5 border-b-gray-800 transition-all duration-300 shadow-md rounded-2xl bg-white">
            <div className="p-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-black">
                Friend or AI? How a Chatbot Can Be Your Emotional Companion
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                Loneliness can sneak into even the busiest lives. AI companions
                like MindMitra are here to listen, comfort, and offer a safe
                space to express yourself — anytime, anywhere.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                While they can’t replace human connection, they can provide
                empathy, encouragement, and gentle guidance when you need it
                most. Whether it’s a late-night worry or a small win worth
                sharing, your AI friend is always ready.
                <span className="font-normal text-blue-500">
                  <Link to="/Blog3"> Read more...</Link>
                </span>
              </p>
            </div>
            <div className="p-6 md:p-10 lg:rounded-2xl overflow-hidden">
              <img
                src="/blog3.png"
                alt="Blog 3"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse text-left hover:py-0.5 hover:border-5 border-b-gray-800 transition-all duration-300 shadow-md rounded-2xl bg-white">
            <div className="p-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-black">
                Stress Detox: Practical Tips to Unwind and Recharge
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                Modern life moves fast — and stress often tags along for the
                ride. But taking intentional breaks can help you reset your mind
                and body before burnout strikes.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                From quick breathing exercises to unplugging from screens, small
                changes can make a big difference. MindMitra shares easy,
                science-backed ways to let go of tension and recharge your
                energy for the days ahead.
                <span className="font-normal text-blue-500">
                  <Link to="/Blog4"> Read more...</Link>
                </span>
              </p>
            </div>
            <div className="p-6 md:p-10 lg:rounded-2xl overflow-hidden">
              <img
                src="/blog4.png"
                alt="Blog 4"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse text-left hover:py-0.5 hover:border-5 border-b-gray-800 transition-all duration-300 shadow-md rounded-2xl bg-white">
            <div className="p-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-black">
                The Power of Listening: How to Support a Friend in Need
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                Sometimes, the most powerful thing you can do for someone is
                simply to listen. True listening goes beyond hearing words —
                it’s about understanding feelings and showing genuine care.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                MindMitra shares practical tips for becoming a better listener
                and creating a safe space for loved ones to open up. A kind ear
                can make a world of difference in someone’s healing journey.
                <span className="font-normal text-blue-500">
                  <Link to="/Blog5"> Read more...</Link>
                </span>
              </p>
            </div>
            <div className="p-6 md:p-10 lg:rounded-2xl overflow-hidden">
              <img
                src="/bolg5.png"
                alt="Blog 5"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse text-left hover:py-0.5 hover:border-5 border-b-gray-800 transition-all duration-300 shadow-md rounded-2xl bg-white">
            <div className="p-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-black">
                Small Steps, Big Change: Building a Habit of Self-Care
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                Self-care doesn’t have to be complicated or time-consuming —
                it’s the little actions, done consistently, that create lasting
                change. Even five minutes a day to breathe, stretch, or enjoy a
                quiet moment can make a huge difference in your mental
                well-being.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
                MindMitra offers simple, science-backed tips to help you weave
                self-care into your everyday life. Whether it’s a short walk,
                journaling, or setting boundaries, these habits can boost your
                energy, resilience, and happiness over time.
                <span className="font-normal text-blue-500">
                  <Link to="/Blog6"> Read more...</Link>
                </span>
              </p>
            </div>
            <div className="p-6 md:p-10 lg:rounded-2xl overflow-hidden">
              <img
                src="/blog6.png"
                alt="Blog 6"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse text-left hover:py-0.5 hover:border-5 border-b-gray-800 transition-all duration-300 shadow-md rounded-2xl bg-white">
  <div className="p-6 space-y-4">
    <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-black">
      MindMitra Stories: Real Conversations, Real Impact
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
      Behind every chat is a story — moments of comfort, encouragement, and
      hope shared between MindMitra and its users. These real conversations
      show how small connections can make a big difference in someone’s life.
    </p>
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
      From easing anxiety to celebrating wins, MindMitra has been there as a
      steady companion. Discover inspiring stories from people who found a
      safe space to express themselves — and how a few kind words can spark
      real change.
      <span className="font-normal text-blue-500">
        <Link to="/Blog7"> Read more...</Link>
      </span>
    </p>
  </div>
  <div className="p-6 md:p-10 lg:rounded-2xl overflow-hidden">
    <img
      src="/blog7.png"
      alt="Blog 7"
      className="rounded-2xl w-full h-full object-cover shadow-lg"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
