import React, { useEffect, useRef } from "react";
import sponsorLogo1 from "/public/SponsorsLogo/sponsor-logo1.png";
import sponsorLogo2 from "/public/SponsorsLogo/sponsor-logo2.png";
import sponsorLogo3 from "/public/SponsorsLogo/sponsor-logo3.png";
import sponsorLogo4 from "/public/SponsorsLogo/sponsor-logo4.png";

const sponsors = [
  {
    id: 1,
    name: "Sponsor A",
    logo: sponsorLogo1,
    link: "https://www.variosystems.com",
  },
  {
    id: 2,
    name: "Sponsor B",
    logo: sponsorLogo2,
    link: "https://www.linkedin.com/company/codechefs123/",
  },
  {
    id: 3,
    name: "Sponsor C",
    logo: sponsorLogo3,
    link: "https://www.linkedin.com/company/ieee-industrial-electronics-society-student-branch-chapter-university-of-kelaniya/",
  },
  {
    id: 4,
    name: "Sponsor D",
    logo: sponsorLogo4,
    link: "https://www.linkedin.com/company/hacksl/",
  },
];

const SponsorsSection = () => {
  const containerRef = useRef(null);

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

    const elements = containerRef.current.querySelectorAll(".scroll-trigger");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="pt-12">
      <div className="text-white container mx-auto text-center scroll-trigger">
        <h1 className="font-transrobotics text-3xl md:text-4xl justify-center items-center content-center px-10 flex text-center md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
          OUR PARTNERS
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-3 md:px-1">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 shadow rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 scroll-trigger"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="h-30" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
