function ListarDoenca( {lista,eventoRemover,editar} ){
    return (
        <table className="table red">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Descrição</td>
                    <td>Ações</td>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map((obj,indice)=>
                    (
                        <tr key={indice}>
                            <td>{obj.id}</td>
                            <td>{obj.descricao}</td>
                            <td>
                            <button type="button" onClick={() => (eventoRemover(obj.id))} className="btn btn-outline-danger">
                                <span className="bi-trash"></span>Remover
                            </button>
                            <button type="button" className="btn btn-outline-warning" 
                            onClick={()=>(editar(obj))}
                            >
                                <span className="bi-pen"></span>Editar
                            </button>
                            </td>
                        </tr>
                    )
                    )
                }
            </tbody>
        </table>
        )
    }
    export default ListarDoenca;