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

  const handleSectionSelect = (section: any) => {
    setSelectedSection(section);
  };

  const carousel = [
    <div className="carousel">
      <h2>Psicoterapia</h2>
      <p>
        Baseada na PSICOLOGIA HUMANISTA, com tendência teórica voltada à
        filosofia e considera que toda pessoa tem potencialidades para o
        crescimento e desenvolvimento naturais. Com o foco de empoderar o
        cliente a descobrir seu EU REAL, criando um ambiente acolhedor e
        empático em que o ser humano possa se desenvolver na direção em que ele
        escolher e para que ele possa manifestar e ser realmente quem é, através
        do autoconhecimento, da ampliação da consciência e compreensão da Física
        e Mecânica Quântica. E assim ajudar o paciente resolver seus sintomas e
        dores emocionais.
      </p>
    </div>,
  ];

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
              <h3>
                Comece agora!
                <br /> Invista em seu Autoconhecimento e desenvolvimento.
              </h3>
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

          {windowSize.width > 768 ? (
            <nav className="coursesNavBar">
              <ul>
                <li
                  className={selectedSection === "psicoterapia" ? "active" : ""}
                  onMouseEnter={() => handleSectionSelect("psicoterapia")}
                  onMouseLeave={() => handleSectionSelect("")}
                >
                  Psicoterapia
                  <div className="section">
                    <h2>Psicoterapia</h2>
                    <p>
                      Como um caminho para o autoconhecimento, aprimoramento,
                      uma forma de entrar em contato com toda sua luz e toda sua
                      sombra, conhecer suas emoções, potencialidades e
                      limitações, quebrar crenças, preconceitos e paradigmas.
                      Manifestar o seu EU REAL e seu brilho único pessoal .
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          ) : (
            <Carousel
              className="carousel"
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              interval={5000}
            >
              {carousel}
            </Carousel>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
