import React from "react";
import Header from "../../components/Header/Header";
import "./styles.css";
function Checkout() {
  return (
    <div className="h-100">
      <Header whiteV={false} />

      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="font-weight-bold section-title">
              Dados de Entrega
            </span>

            <div className="row mb-3 mt-2">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-4 pl-0">
                <input
                  type="text"
                  placeholder="Numero"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <span className="font-weight-bold  section-title">
              Dados de Pagamento
            </span>

            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Numero do Cartao"
                  className="form-control form-control-lg mt-2"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg mt-2"
                />
              </div>
              <div className="col-6">
                <input
                  type="number"
                  placeholder="CVV"
                  className="form-control form-control-lg mt-2"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Nome do Titular"
                  className="form-control form-control-lg mt-2"
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-6">
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  pattern="[0-9]{3}"
                  placeholder="CPF / CNPJ do titular"
                  className="form-control form-control-lg mt-2"
                />
              </div>
            </div>

            <div className="row mt-3 pl-4 d-flex justify-content-between ">
              <span className="font-weight-bold">Total:</span>
              <div className="col-6 pl-0">
                <span className="font-weight-bold">R$ 0,00</span>
              </div>
            </div>

            <div className="row mt-3 pl-4 d-flex mb-4">
              <div className="col-6 pl-0">
                <button className="btn btn-lg btn-block btn-primary">
                  Finalizar Compra
                </button>
              </div>
              <div className="col-6 pl-0">
                <button className="btn btn-lg btn-block btn-primary">
                  Cancelar Compra
                </button>
              </div>
            </div>
          </div>

          <div className="col-6 mt-4">
            <div className="box col-8">
              <h6 className="mt-2">Minha Sacola (4)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
