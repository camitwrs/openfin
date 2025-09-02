// src/components/Footer.jsx
import React from "react";
// import pucvlogo from "../../assets/pucv.gif";
// import anidlogo from "../../assets/anid.png";
// import finLogo from "../../assets/FINCOLOR.png";
// import otlLogo from "../../assets/logo_OTL.png";
// import inesLogo from "../../assets/ines.png";
// import vicerrectoriaLogo from "../../assets/vicerrectoria.svg";

// Logos para la sección "Organiza"
import organizaPUCV from "../../assets/logo-fin.png"; // LOGO PUCV y Facultad de Ingeniería
import organizaK2I from "../../assets/k2i-blanco.png"; // LOGO KEI
import organizaCII from "../../assets/centrointer-blanco.png"; // LOGO CII

// Logos para la sección "Colabora"
import colaboraNano from "../../assets/nano-blanco.png"; // LOGO NANO TC
import colaboraCMF from "../../assets/cmf-blanco.png"; // LOGO CMF

// Logos para la sección "Apoya"
import apoyaOTL from "../../assets/otl-blanco.png"; // LOGO OTL
import apoyaINES from "../../assets/ines-blanco.png"; // LOGO INES+D
import apoyaANID from "../../assets/anid-blanco.png"; // LOGO ANID

function Footer() {
  // Define tus grupos de logos con sus imágenes Y AHORA SUS LINKS
  const sections = [
    {
      title: "Organiza",
      logos: [
        {
          src: organizaPUCV,
          alt: "Logo Pontificia Universidad Católica de Valparaíso",
          href: "https://www.ingenieria.pucv.cl/", // <-- LINK AQUI
        },
        {
          src: organizaK2I,
          alt: "Logo Knowledge to Industry Group",
        },
        {
          src: organizaCII,
          alt: "Logo Centro Interdisciplinario de Ingeniería",
          href: "https://gargar-gmn4.vercel.app/", // <-- LINK AQUI
        },
      ],
    },
    {
      title: "Colabora",
      logos: [
        {
          src: colaboraNano,
          alt: "Logo Nano TC",
          href: "https://nanotc.cl/password", // <-- LINK AQUI
        },
        {
          src: colaboraCMF,
          alt: "Logo CMF",
          href: "https://www.cmfchile.cl/portal/principal/613/w3-channel.html", // <-- LINK AQUI
        },
      ],
    },
    {
      title: "Apoya",
      logos: [
        {
          src: apoyaOTL,
          alt: "Logo OTL",
          href: "https://www.pucv.cl/uuaa/site/edic/base/port/otl.html", // <-- LINK AQUI
        },
        {
          src: apoyaINES,
          alt: "Logo InES I+D PUCV",
        },
        {
          src: apoyaANID,
          alt: "Logo ANID",
          href: "https://anid.cl/", // <-- LINK AQUI
        },
      ],
    },
  ];

  return (
    <footer className="relative z-50 p-8 sm:p-12 text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8 last:mb-0">
            <h3 className="text-xl md:text-lg font-bold mb-6">
              {section.title}
            </h3>
            <div className="flex justify-center">
              <div
                className={`grid gap-y-4 gap-x-10 items-center justify-items-center ${
                  section.logos.length === 2
                    ? "grid-cols-3 lg:grid-cols-2 xl:grid-cols-2"
                    : section.logos.length === 3
                    ? "grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
                    : "grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
                } `}
              >
                {section.logos.map((logo, logoIndex) =>
                  logo.href ? (
                    <a
                      key={logoIndex}
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="sm:h-8 md:h-12 lg:h-16 transition-transform duration-200 hover:scale-105"
                      />
                    </a>
                  ) : (
                    // Si no hay href, solo renderiza la imagen sin enlace
                    <img
                      key={logoIndex} // Key es importante incluso si no hay enlace
                      src={logo.src}
                      alt={logo.alt}
                      className="sm:h-8 md:h-12 lg:h-16" // No hay efecto hover ya que no es un enlace
                    />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
