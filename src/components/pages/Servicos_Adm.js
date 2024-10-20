import { ReactComponent as More } from "../img/arrow_right_alt_24dp_FF750C_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as MyLogo } from "../img/mic.svg";
import "../estilo/Servicos_Adm.css";

const MyComponent = () => {
  return (
    <>
      <div className="Chat">
        <MyLogo />
        <button className="borda">Olá, em que posso ajudar? </button>
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
