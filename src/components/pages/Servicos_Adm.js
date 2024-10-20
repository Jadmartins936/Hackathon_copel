import Mic from "../img/mic.svg";

const MyComponent = () => {
  return (
    <div className="Chat">
      <div className="msg">
        <img src={Mic} alt="imagem de microfone mutado" />
        <p>Olá, em que posso ajudar?</p>
      </div>
    </div>
  );
};

export default MyComponent;
