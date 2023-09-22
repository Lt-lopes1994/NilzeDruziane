import socialContent from "@/data/socialContent";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="aboutUs">
        <h3>Sobre nós : </h3>
        Para você que quer se reconectar com sua essência, se redescobrir e se
        atualizar através do alinhamento entre seu corpo, sua mente e sua
        essência divina, seu EU VERDADEIRO.
      </div>
      <div className="social">
        <h3>Redes Sociais : </h3>
        <p>Conecte-se com a gente!</p>
        <p>
          Siga-nos nas redes sociais e fique por dentro de todas as novidades.
        </p>
        <div className="socialIcons">
          <ul style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {socialContent.map((item) => (
              <li key={item.id}>
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fa ${item.icon}`}
                    style={{ color: "#f0d689" }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contact">
        <h3>Contato : </h3>
        <ul>
          <li>
            <i className="fa fa-phone" style={{ marginRight: "5px" }} />
            <span>Telefone : </span>
            (19) 99196-5025
          </li>
          <li>
            <i className="fa fa-envelope" style={{ marginRight: "5px" }} />
            <span>Email : </span>
            nilzedruzi@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
