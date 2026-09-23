import { useState } from "react";

function Nome() {
  // 1. criar as useState para cada campo do formulário
  const [rua, setRua] = useState("");
  const [cep, setCep] = useState("");

  // criar um estado user para armazenar os dados do formulário e mostrar em tela
  const [user, setUser] = useState({
    rua: "",
    cep: "",
  });

  // criar a função handleRegister para capturar os dados do formulário e setar no estado user
  function handleRegister(e) {
    e.preventDefault(); 
    
    setUser({
      rua: rua,
      cep: cep,
    });

    alert("Cadastro realizado com sucesso!");
  }
  
  return (
    <div>
      <h1>Formulário de cadastro</h1>
     
      <form onSubmit={handleRegister}>
        <br />
      
        <label>Rua</label>
        <br />
        <input
          placeholder="Digite sua rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <br />

        <label>CEP</label>
        <br />
        <input
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <br />

        <button type="submit">Entrar</button>
      </form>

      <br />

      <div>
        <br />
        <span>Rua: {user.rua}</span>
        <br />
        <span>CEP: {user.cep}</span>
        <br />
        <span>Estado: <strong>{user.estado}</strong></span>
      </div>
    </div>
  );
}

export default Nome;
