import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../estilo/Forms.css";

function Forms() {
  const [token, setToken] = useState("NULL");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do form (recarregar a página)

    setToken(document.getElementById("unid"));

    // Navegar para uma nova rota (ex: /dashboard)
    navigate("/serviços"); // Altere para a rota que desejar
  };

  return (
    <div>
      <div className="Container"></div>
      <div className="xContainer"></div>
      <form onSubmit={handleSubmit}>
        <h1>Validar Cliente</h1>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="unid"
            placeholder="CPF/Unidade Consumidora"
          />
        </label>
        <label htmlFor="Entrar">
          <button type="submit" id="Entrar">
            Entrar
          </button>
        </label>
      </form>
    </div>
  );
}

export default Forms;
