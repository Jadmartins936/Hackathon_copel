import { ReactComponent as MyLogo } from "../img/mic.svg";
import "../estilo/Servicos_Adm.css";

const MyComponent = () => {
  return (
    <div className="Chat">
      <MyLogo />
      <input className="borda" placeholder="Olá, em que posso ajudar? "></input>
    </div>
  );
};
export default MyComponent;
