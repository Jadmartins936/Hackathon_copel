import React from "react";
import { useNavigate } from 'react-router-dom';
import '../estilo/Forms.css';

function Forms() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do form (recarregar a página)

        // Aqui você pode adicionar lógica adicional, como validação

        // Navegar para uma nova rota (ex: /dashboard)
        navigate('/'); // Altere para a rota que desejar
    }

    return (
        <div>
            <div className="Container">
            </div>
            <div className="xContainer"></div>
            <form onSubmit={handleSubmit}>
                <h1>Login de Usuário</h1>
                <label htmlFor="name">
                    Unidade consumidora:
                    <input type="text" name="name" id="passwordn" />
                </label>
                <label htmlFor="Entrar">
                    <button type="submit" id="Entrar">Entrar</button>
                </label>
            </form>
        </div>
    );
}

export default Forms;
