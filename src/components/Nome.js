import { useState } from "react";

function Nome() {
  // Estados para cada campo do formulário
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");

  // Estado para armazenar os dados cadastrados
  const [user, setUser] = useState({
    idade: "",
    telefone: "",
  });

  // Função chamada ao enviar o formulário
  function handleRegister(event) {
    event.preventDefault();

    setUser({
      idade: idade,
      telefone: telefone,
    });

    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div>
      <h1>Formulário de cadastro</h1>

      <form onSubmit={handleRegister}>
        <label>Idade</label>
        <br />

        <input
          type="number"
          placeholder="Digite sua idade"
          value={idade}
          onChange={(event) => setIdade(event.target.value)}
        />

        <br />

        <label>Telefone</label>
        <br />

        <input
          type="tel"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />

        <br />

        <button type="submit">Entrar</button>
      </form>

      <br />

      <div>
        <span>Idade: {user.idade}</span>
        <br />
        <span>Telefone: {user.telefone}</span>
        <br />
      </div>
    </div>
  );
}

export default Nome;
