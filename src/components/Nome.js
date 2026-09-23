import { useState } from "react";

function Nome() {
  // 1. Estados para os campos Cidade e Estado
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  // 2. Estado para armazenar os dados e exibir na tela
  const [user, setUser] = useState({
    cidade: "",
    estado: ""
  });

  // 3. Função para processar o envio
  function handleRegister(e) {
    e.preventDefault(); // Impede o recarregamento da página

    setUser({
      cidade: cidade,
      estado: estado
    });

    alert("Cadastro realizado com sucesso!");

    // Limpa os campos após o envio
    setCidade("");
    setEstado("");
  }

  return (
    <div>
      <h1>Formulário de cadastro</h1>

      <form onSubmit={handleRegister}>
        {/* Campo Cidade */}
        <label>Cidade</label>
        <br />
        <input
          placeholder="Digite sua cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <br />

        {/* Campo Estado */}
        <label>Estado</label>
        <br />
        <input
          placeholder="Digite seu estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Entrar</button>
      </form>

      <br />

      {/* Exibição apenas dos dados cadastrados */}
      <div>
        <span>Cidade: <strong>{user.cidade}</strong></span>
        <br />
        <span>Estado: <strong>{user.estado}</strong></span>
      </div>
    </div>
  );
}

export default Nome;