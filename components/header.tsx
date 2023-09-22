/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from "@/public/assets/img/Novo_Logo_Nilze.jpg";
import Image from "next/image";

function Header() {
  return (
    <header className="containerHeader ">
      <Image src={Logo} alt="Logo" width={110} height={110} />
      <h1>Mentoria de auto-conhecimento</h1>

      <nav>
        <ul className="navHeader">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/SobreNos">Sobre</a>
          </li>
          <li>
            <a href="/Cursos">Cursos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
