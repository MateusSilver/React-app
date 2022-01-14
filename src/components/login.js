function Login() {
  return (
    <div className="box">
      <form>
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="login" required />
        <label for="senha">Senha</label>
        <input type="password" id="senha" placeholder="senha" required />
        <input type="button" value="entrar" className="button" />
      </form>
    </div>
  );
}

export default Login;
