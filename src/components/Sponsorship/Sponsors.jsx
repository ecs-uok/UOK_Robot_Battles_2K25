import React, { useEffect, useRef } from "react";
import sponsorLogo1 from "/SponsorsLogo/Vario-Systems.png";
import sponsorLogo2 from "/SponsorsLogo/Zone24x7.png";
import sponsorLogo3 from "/SponsorsLogo/Hack_SL.png";
import sponsorLogo4 from "/SponsorsLogo/Michelin.png";
import sponsorLogo5 from "/SponsorsLogo/IEEE.png";
import sponsorLogo6 from "/SponsorsLogo/Gavel.png";
import sponsorLogo7 from "/SponsorsLogo/XYDDER_3D.png";
import sponsorLogo8 from "/SponsorsLogo/None.svg";

const sponsors = [
  {
    id: 1,
    name: "Vario Systems",
    logo: sponsorLogo1,
    link: "https://www.variosystems.com",
  },
  {
    id: 5,
    name: "CodeChef",
    logo: sponsorLogo4,
    link: "https://www.michelin.com/en/",
  },
  {
    id: 2,
    name: "Zone24x7",
    logo: sponsorLogo2,
    link: "https://zone24x7.com/",
  },
  {
    id: 4,
    name: "Hack SL",
    logo: sponsorLogo3,
    link: "https://www.linkedin.com/company/hacksl/",
  },
  {
    id: 3,
    name: "IEEE IES University of Kelaniya",
    logo: sponsorLogo5,
    link: "https://www.linkedin.com/company/ieee-industrial-electronics-society-student-branch-chapter-university-of-kelaniya/",
  },
  {
    id: 6,
    name: "Gavel",
    logo: sponsorLogo6,
    link: "https://web.facebook.com/uokgavelclub",
  },
  {
    id: 7,
    name: "XYDDER 3D",
    logo: sponsorLogo8,
    link: "https://xydder3d.lk/",
  },
  {
    id: 8,
    name: "XYDDER 3D",
    logo: sponsorLogo7,
    link: "https://web.facebook.com/uokgavelclub",
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
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-4 px-3 md:px-1 justify-items-center">
          {sponsors.map((sponsor, index) => (
            <a
              key={sponsor.id}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 shadow rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 scroll-trigger h-32 md:h-40"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
