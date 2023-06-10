import React from "react";
import "./styles.css";
function Cadastro() {
  return (
    <div className="  bg-primary cadastro container-fluid">
      <div className="logo">
        <img src="src\assets\logo-white.png" alt="logo" />
      </div>

      <div className="row">
        <div className="col-6 my-auto text-right">
          <img src="src\assets\illustration.svg" alt="" className="img-fluid" />
        </div>

        <div className="col-6">
          <div className="box col-8">
            <h1>Falta pouco pra fazer o seu pet feliz.</h1>

            <div className="form">
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome Completo"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Completo"
              />
              <input
                type="tel"
                name="telefone"
                id="telefone"
                placeholder="Digite seu telefone"
              />
              <input type="text" name="cpf" id="cpf" placeholder="CPF" />

              <input
                type="date"
                name="data"
                id="data"
                placeholder="Data de nascimento"
              />

              <button className="bg-secondary text-white  btn btn-lg">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
