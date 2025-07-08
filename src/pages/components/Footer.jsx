import pucvlogo from "../../assets/pucv.gif";
import anidlogo from "../../assets/anid.png";
import finLogo from "../../assets/Facultad de Ingeniería_COLOR.png";
import otlLogo from "../../assets/logo_OTL.png";
import inesLogo from "../../assets/ines.png";
import vicerrectoriaLogo from "../../assets/vicerrectoria.svg";

function Footer() {
  const allLogos = [
    { src: finLogo, alt: "Logo Facultad de Ingeniería" },
    { src: otlLogo, alt: "Logo OTL" },
    { src: inesLogo, alt: "Logo INES" },
    { src: vicerrectoriaLogo, alt: "Logo Vicerrectoría PUCV" },
    { src: anidlogo, alt: "Logo ANID" },
  ];

  return (
    <footer className="bg-[#ffffff] z-50 p-6 sm:p-8 flex flex-col items-center">
      {/* Contenedor flexible para pantallas pequeñas (móviles/tablets) */}
      {/* Se muestran todos los logos en un solo flex-wrap para que se ajusten */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:hidden">
        {allLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 sm:h-18" // Tamaños para móviles y tablets
          />
        ))}
      </div>

      {/* Contenedor de cuadrícula (grid) para pantallas grandes (PC/lg) */}
      {/* Solo visible a partir de 'lg' */}
      <div className="hidden lg:block max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-8 items-center justify-items-center mb-6">
          {/* Primeros 3 logos para la fila superior */}
          {allLogos.slice(0, 3).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-20" // Tamaño para PC
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 items-center justify-items-center w-2/3 mx-auto">
          {" "}
          {/* W-2/3 y mx-auto para centrar esta fila de 2 */}
          {/* Siguientes 2 logos para la fila inferior */}
          {allLogos.slice(3, 5).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-24" // Tamaño para PC
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;