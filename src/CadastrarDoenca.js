function CadastrarDoenca({modo, eventoTeclado , eventoCadastrar,obj}){

    return(
    
    <form>
        <input type='text' value={obj.descricao} onChange={eventoTeclado} name='descricao' placeholder="Descrição" className="form-control" />
       
       
        <input type="button" value={modo==="cadastro"?"Salvar":"Atualizar"} onClick={eventoCadastrar} className="btn btn-outline-success"/>
    </form>
    
    )
    
    }
    
export default CadastrarDoenca;