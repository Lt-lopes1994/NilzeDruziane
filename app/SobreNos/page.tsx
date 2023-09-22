/* eslint-disable react/no-unescaped-entities */
import ProfilePic from "@/public/assets/img/Foto_Nilze.jpg";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="containerAboutUs">
      <section className="sectionHome"></section>
      <section className="aboutUs">
        <div className="ower">
          <Image
            className="rounded-full"
            src={ProfilePic}
            width={250}
            height={250}
            alt="Foto de perfil"
          />
          <h1>Nilze Druziani</h1>
          <p>Psicóloga e Personal Coach</p>
        </div>

        <section className="sectionAboutUs">
          <p>
            Mentora de Ampliação da Consciência Formada em Psicologia, Personal
            , Profissional e Health Coaching, Professora de Yoga e Meditação.
            Ajudo as pessoas trazerem a tona a sua melhor versão, entrar em
            comunhão com seu corpo, desengavetar seus sonhos e reascender o seu
            brilho pessoal, te empoderando, encorajando e motivando a reescrever
            sua história a partir de suas próprias escolhas.
          </p>
        </section>
      </section>
    </div>
  );
}

export default AboutUs;
