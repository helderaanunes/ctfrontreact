function CadastrarDoenca({eventoTeclado , eventoCadastrar,obj}){

    return(
    
    <form>
        <input type='text' value={obj.descricao} onChange={eventoTeclado} name='descricao' placeholder="Descrição" className="form-control" />
       
       
        <input type="button" value="Salvar" onClick={eventoCadastrar} className="btn btn-outline-success"/>
    </form>
    
    )
    
    }
    
export default CadastrarDoenca;