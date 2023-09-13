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

  return (
    <div className="App">
      <p>O que recebeu foi: {JSON.stringify(doenca)}</p>
      <CadastrarDoenca></CadastrarDoenca>
      <ListarDoenca lista={doencas}></ListarDoenca>
    </div>
  );
}

export default App;
