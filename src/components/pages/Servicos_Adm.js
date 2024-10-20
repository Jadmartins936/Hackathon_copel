
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
      <center>
        <h1>Serviços</h1>
      </center>
      <div className="align">
        <div className="cards">
          <div className="servicoscard">
            <p>Falta de luz</p>
          </div>
          <div className="servicoscard">
            {" "}
            <p>Ligação/Troca de Padrão</p>
          </div>
          <div className="servicoscard">
            <p>Troca de titularidade</p>
          </div>
        </div>
        <div className="cards">
          <div className="servicoscard">
            <p>Fatura</p>
          </div>
          <div className="servicoscard">
            <p>Ligamento / Religamento</p>
          </div>
          <div className="servicoscard">
            <p>Ressarcimento de danos</p>
          </div>
        </div>
      </div>

      <div className="align2"></div>
    </>
  );
};
export default MyComponent;
