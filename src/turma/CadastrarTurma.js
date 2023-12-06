import { useEffect, useState } from "react";

function CadastrarTurma(){
    const [modalidades, setModalidades] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8080/modalidadesOrdenado")
        .then((retorno) => retorno.json())
        .then((retornoConvertidoEmJson) => setModalidades(retornoConvertidoEmJson));
    }, []); //esse colchete é para realizar a requisição uma vez
  
    return(
        <div>
            <form>
                <input type='text' name='descricao' placeholder="Descrição"
                 className="form-control" />

                <select className="form-control" >
                    <option> Selecione uma modalidade</option>
                {
                    modalidades.map((obj,indice)=>
                    (
                       <option value={obj.id}>{obj.descricao}</option> 
                    )
                    )
                }
                </select>

                <input type='text' name='horaInicio' placeholder="Hora Início"
                 className="form-control" />
                <input type='text' name='horaFim' placeholder="Hora Fim"
                 className="form-control" />
                <input type='text' name='dia1' placeholder="Dia 1"
                 className="form-control" />
                 <input type='text' name='dia2' placeholder="Dia 2"
                 className="form-control" />
                 <input type='text' name='dia3' placeholder="Dia 3"
                 className="form-control" />
                 <input type='number' name='valorMensalidade' 
                 placeholder="Valor Mensalidade" className="form-control" />
                 
                <input type="button" value="Salvar" 
                className="btn btn-outline-success"/>
            </form>
        </div>
    )
}
export default CadastrarTurma;