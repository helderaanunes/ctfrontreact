import './App.css';
import CadastrarDoenca from './CadastrarDoenca';
import ListarDoenca from './ListarDoenca';
import { useEffect, useState } from 'react';


function App() {
  
  const [ doencas, setDoencas] = useState([]);
  useEffect(()=>{
  fetch ("http://localhost:8080/doencas")
  .then(retorno => retorno.json())
  .then(retornoConvertidoEmJson => setDoencas(retornoConvertidoEmJson))
  },[]) //esse colchete é para realizar a requisição uma vez

  return (
    <div className="App">
      <p>{JSON.stringify(doencas)}</p>
      <CadastrarDoenca></CadastrarDoenca>
      <ListarDoenca></ListarDoenca>
    </div>
  );
}

export default App;
