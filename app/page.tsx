"use client";

import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nilze from "@/public/assets/img/Nilze.jpg";
import Image from "next/image";

function Home() {
  const [selectedSection, setSelectedSection] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="containerHome">
        <section className="hero">
          <div className="heroLeftContent">
            <div className="leftContentTexts">
              <h1>Bem-vindo Ser Infinito!</h1>

              <p>
                Meu foco é proporcionar a ampliação das consciências, através do
                autoconhecimento. Aqui buscamos autenticidade e empoderamos as
                pessoas para que tragam à tona seu EU REAL.
              </p>

              <a href="/aulas">
                <button className="btnNavigate">Conheça mais</button>
              </a>
            </div>
          </div>

          <div className="heroRightContent">
            <Image src={Nilze} width={500} height={500} alt="Nilze Druziane" />
          </div>
        </section>

        <div className="containerCourses bg-cover bg-containerCoursesBackgorund">
          <div className="coursesHeader">
            <div className="coursesHeaderLeft">
              <div className="flex flex-col">
                <h3 className="p-2">
                  Comece agora!
                  <br /> Invista em seu Autoconhecimento e desenvolvimento.
                </h3>
                <h4 className="text-white">
                  Como funciona a terapia online? A terapia online funciona de
                  uma forma semelhante à presencial. Por meio das videochamadas,
                  o profissional conversará com o paciente sobre as questões que
                  o trouxeram à terapia. Assim, será conduzida a sessão
                  normalmente. No entanto, o ideal é que o paciente escolha um
                  local tranquilo da sua casa para fazer a terapia.
                </h4>
                <h5 className="text-white">
                  Esse processo pode se dar através de sessões (on-line) de 50
                  min de duração onde eu ajudo o cliente tomar consciência de
                  seu conjunto de ideias e juntos buscamos fazer as atualizações
                  e ressignificações necessárias para seu avanço e
                  desenvolvimento pessoal e trazer a tona sua melhor versão
                  Valor da sessão $ 195 Ideal 1 x por semana
                </h5>
              </div>
            </div>

            <div className="coursesHeaderRight">
              <a
                href="https://wa.me/+ 19991965025"
                className="btnSchedule"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-whatsapp" /> Agende sua sessão
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
