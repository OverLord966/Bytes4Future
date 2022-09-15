const arr = [
    {nome: "Susana"},
    {nome: "Renato"},
]




//(n) => <h3></h3>

export function Lista(){
    return(
        <div>
            {arr.map((e) => <h3 
                key={e.nome} 
                onClick={() => console.log(e.idade)}>
                    {e.nome}
            </h3>)} 
            <input onKeyDown={(e) => console.log(e)}></input>
        </div>
    )
}