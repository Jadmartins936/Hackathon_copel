
import { ReactComponent as MyLogo } from "../img/mic.svg";
import "../estilo/Servicos_Adm.css";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="Chat">
        <MyLogo />
        <button className="borda" onClick={() => Navigate("/chat")}>
          Olá, em que posso ajudar?{" "}
        </button>
      </div>
      <h1>Serviços</h1>
      <section id="align">
        <div className="servicoscard"> <p>Rede Pública</p></div>
        <div className="servicoscard"><p>Troca de titularidade</p></div>
        <div className="servicoscard"><p> Pagamento</p></div>
        <div className="servicoscard"><p>Informar falta de luz</p></div>
        <div className="servicoscard"><p>Segunda via</p></div>
        <div className="servicoscard"><p>Parcelamento</p></div>

        <div className="align2">
        
        </div>
      </section>
    </>
  );
};
export default MyComponent;
