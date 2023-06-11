import React from "react";
import "./styles.css";
import Header from "../../components/Header/Header";
function Cadastro() {
  return (
    <div className="  bg-primary cadastro container-fluid">
      <div className="logo">
        <Header hideCart />
      </div>

      <div className="row  row-image">
        <div className="col-6 my-auto text-right">
          <img
            src="src\assets\illustration (1).svg"
            alt=""
            className="img-fluid"
          />
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
