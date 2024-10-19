function Forms(params) {
    return(
        <div>
            <h1>Login de Usuário</h1>
            <form action='POST'>
                <label for="name">
                    Nome:<input type="text" name="name" id="passwordn"></input>
                </label>
                <label for="password">
                    Senha<input type="password" name="password" id="password"></input>
                </label>
                <input type="submit" value="Entrar"></input>
            </form>
        </div>
    )

}export default Forms