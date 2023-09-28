import "./App.css";
import CadastrarDoenca from "./CadastrarDoenca";
import ListarDoenca from "./ListarDoenca";
import { useEffect, useState } from "react";

function App() {
  const doenca = {
    id: 0,
    descricao: "",
  };
  const [objDoenca, setObjDoenca] = useState(doenca);

  const [doencas, setDoencas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/doencas")
      .then((retorno) => retorno.json())
      .then((retornoConvertidoEmJson) => setDoencas(retornoConvertidoEmJson));
  }, []); //esse colchete é para realizar a requisição uma vez

  const eventoDigitar = (e) => {
    setObjDoenca({ ...objDoenca, [e.target.name]: e.target.value });
  };

  const limparFormulario = () => {
    setObjDoenca(doenca);
  }
  const remover = (id) => {
    fetch("http://localhost:8080/doencas/"+id, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retornoConvertidoEmJson) => {
        if (retornoConvertidoEmJson.mensagem !== undefined) {
          alert(retornoConvertidoEmJson.mensagem);
        } else {
          alert("Removido com sucesso!");
        }
      })
      .then(
        () => {
          fetch("http://localhost:8080/doencas")
            .then((retorno) => retorno.json())
            .then((retornoConvertidoEmJson) => setDoencas(retornoConvertidoEmJson));
        }
      );
  };
  const cadastrar = () => {
    fetch("http://localhost:8080/doencas", {
      method: "post",
      body: JSON.stringify(objDoenca),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retornoConvertidoEmJson) => {
        if (retornoConvertidoEmJson.mensagem !== undefined) {
          alert(retornoConvertidoEmJson.mensagem);
        } else {
          setDoencas([...doencas, retornoConvertidoEmJson]);
          alert("Salvo com sucesso!");
          limparFormulario();
        }
      });
  };

  return (
    <div className="App">
      <p>O que recebeu foi: {JSON.stringify(objDoenca)}</p>
      <CadastrarDoenca
        eventoTeclado={eventoDigitar}
        eventoCadastrar={cadastrar}
        obj={objDoenca}
      ></CadastrarDoenca>
      <ListarDoenca 
      lista={doencas} 
      eventoRemover={remover}
      ></ListarDoenca>
    </div>
  );
}

export default App;
