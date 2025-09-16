import React, { useState, useEffect, useRef } from "react";

const events = [
  {
    date: "2025 May 10",
    title: "Registration opening",
    description:
      "Start assembling your bots and your teams. Registrations open now for the ultimate robotics showdown.",
    button: "Registration Closed",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    image: "/Timeline/Icon1.png", // Updated image path
  },
  {
    date: "2025 August 05",
    title: "Registration closing",
    description:
      "Don't miss your chance to be part of the fiercest battle of the year. Finalize your team and register before it's too late.",
    button: "Register Now Before Closing",
    buttonColor: "bg-red-500 hover:bg-red-600",
    image: "/Timeline/Icon2.png",
  },
  {
    date: "2025 August 10",
    title: "Workshop",
    description:
      "Join the official pre-battle workshop. Get guidance, tips, and insights from pros to level up your game.",
    button: "Join Session Via Zoom",
    buttonColor: "bg-green-600 hover:bg-green-500",
    image: "/Timeline/Icon3.png",
  },
  {
    date: "2025 September 13",
    title: "Awareness Session",
    description:
      "Everything you need to know, from rules to strategies. Join us and gear up with confidence.",
    button: "Join Session",
    buttonColor: "bg-yellow-600 hover:bg-yellow-500 text-white transition",
    image: "/Timeline/Icon4.png",
  },
  {
    date: "2025 September 20",
    title: "Battle Day",
    description:
      "The bots are built, the arena awaits. Greatness shows no mercy. Only one will reign supreme",
    button: "View Details",
    buttonColor: "bg-purple-800 {/*hover:bg-purple-600*/}",
    image: "/Timeline/Icon5.png",
  },
];

export default function Timeline({ registerButtonRef }) {
  // Accept registerButtonRef as a prop
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = timelineRef.current.querySelectorAll(".scroll-trigger");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={timelineRef}
      className="pt-10 md:pt-20 pb-10 relative min-h-screen bg-[#020230]"
    >
      <h1 className="font-transrobotics text-4xl md:text-4xl justify-center items-center px-5 md:px-10 flex text-center md:text-start text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 scroll-trigger">
        Timeline
      </h1>

      <div className="relative flex flex-col items-center mt-10 px-5 md:px-10">
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[4px] z-0">
          <TimelineStartCap />
          <div className="h-full bg-white w-[4px] mx-auto" />
          <TimelineEndCap />
        </div>

        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center w-full z-10 my-10 scroll-trigger"
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-1/3 md:w-2/5 flex justify-end scroll-trigger">
                  <p className="font-transrobotics text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-lg md:text-2xl">
                    {event.date}
                  </p>
                </div>
                <TimelineNode src={event.image} />
                <div className="w-1/3 md:w-2/5 flex justify-start scroll-trigger">
                  <TimelineCard
                    event={event}
                    registerButtonRef={registerButtonRef}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-1/3 md:w-2/5 flex justify-end scroll-trigger">
                  <TimelineCard
                    event={event}
                    registerButtonRef={registerButtonRef}
                  />
                </div>
                <TimelineNode src={event.image} />
                <div className="w-1/3 md:w-2/5 flex justify-start scroll-trigger">
                  <p className="font-transrobotics text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-lg md:text-2xl">
                    {event.date}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineStartCap() {
  return (
    <div className="w-4 h-4 bg-white transform rotate-45 origin-center absolute left-1/2 -translate-x-1/2" />
  );
}

function TimelineEndCap() {
  return (
    <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2" />
  );
}

// ✅ Accept src prop for dynamic image
function TimelineNode({ src }) {
  return (
    <div className="relative w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center z-10">
      <svg
        width="80"
        height="80"
        viewBox="0 0 266 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M103.858 16.6927C121.981 6.62263 144.019 6.62263 162.142 16.6927L217.324 47.354C236.369 57.9368 248.181 78.0129 248.181 99.8014V157.199C248.181 178.987 236.369 199.063 217.324 209.646L162.142 240.307C144.019 250.377 121.981 250.377 103.858 240.307L48.6764 209.646C29.6305 199.063 17.8186 178.987 17.8186 157.199V99.8014C17.8186 78.0129 29.6305 57.9368 48.6764 47.354L103.858 16.6927Z"
          fill="#D9D9D9"
        />
        <ellipse cx="129.5" cy="128.5" rx="68.5" ry="74" fill="#020101" />
      </svg>
      <img
        src={src}
        alt="Event Icon"
        className="absolute w-6 h-6"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}

function TimelineCard({ event, registerButtonRef }) {
  // Accept registerButtonRef as a prop

  const triggerHomeRegister = () => {
    if (registerButtonRef && registerButtonRef.current) {
      registerButtonRef.current.click(); // Trigger the home section's register button
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] text-white rounded-lg p-3.5 md:p-6 max-w-md shadow-lg">
      <h2 className="text-sm md:text-xl font-bold mb-2 font-transrobotics text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
        {event.title}
      </h2>
      <p className="text-xs md:text-base mb-3 font-poppins">
        {event.description}
      </p>
      {event.title === "Workshop" && (
        <p className="text-xs md:text-base mb-3 font-poppins text-blue-400">
          Time: 7.00 PM – 9.00 PM
        </p>
      )}
      {event.title === "Awareness Session" && (
        <p className="text-xs md:text-base mb-3 font-poppins text-yellow-400">
          Time: 7.00 PM – 8.00 PM
        </p>
      )}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
        {event.title === "Registration closing" ? (
          <button
            className="bg-gray-500 text-white font-poppins font-bold text-sm px-3 py-2 rounded cursor-not-allowed opacity-50"
            disabled
          >
            Registration Closed
          </button>
        ) : event.title === "Registration opening" ? (
          <button
            className="bg-gray-500 text-white font-poppins font-bold text-sm px-3 py-2 rounded cursor-not-allowed opacity-50"
            disabled
          >
            Registration Closed
          </button>
        ) : (
          <button
            className={`${
              event.buttonColor
            } font-poppins font-bold text-sm px-3 py-2 rounded ${
              event.title === "Workshop"
                ? "text-white transition"
                : event.title === "Awareness Session"
                ? "text-white transition"
                : event.title === "Battle Day"
                ? "text-gray-400 hover:bg-none cursor-not-allowed"
                : "text-gray-400 transition"
            }`}
            onClick={() => {
              if (event.title === "Workshop") {
                window.open(
                  "https://zoom.us/j/95862962013?pwd=1vDaBwQIAekDUmqTRu0DHb4ZqIsHiw.1",
                  "_blank"
                );
              } else if (event.title === "Awareness Session") {
                window.open(
                  "https://zoom.us/j/98868373886?pwd=8LbY09Izpq1IcQQA3tmEPzsvImxFio.1", // <-- Replace with actual link
                  "_blank"
                );
              } else if (event.title === "Battle Day") {
                return null;
              } else {
                window.open("https://forms.google.com/your-form-url", "_blank");
              }
            }}
            disabled={event.title === "Battle Day"}
          >
            {event.button}
          </button>
        )}
      </div>
    </div>
  );
}
