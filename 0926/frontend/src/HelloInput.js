import { useState } from "react"
export default function HelloInput() {
    const [texto, setTexto] = useState("")
    const [descricao, setDescricao] = useState(["A descrição 1 está aqui", "A descrição 2 está aqui", "A descrição 3 está aqui"])
    const [resposta, setresposta] = useState("A resposta é isto")
    const [des, setDes] = useState(["Discussão 1", "Discussão 2", "Discussão 3"])
    const [click, setClick] = useState(false)
    const [dis, setDis] = useState(false)
    const [dis1, setDis1] = useState(false)
    const [dis2, setDis2] = useState(false)
    return (
        <div>
            {click === false ? (
                <input 
                onChange={(ele) => setTexto(ele.target.value)}
                value={texto}
                type={"text"} 
            />
            ) : (
                <p></p>
            )}
            
            {click === false ? (
                <button onClick={() => setClick(true)}>Apresentar</button>
            ) : (
                <div>
                    <p>Titulo</p>
                    <ol>
                        <li><span onClick={() => setDis(true)}>
                            {des[0]}
                        </span></li>
                        <li><span onClick={() => setDis1(true)}>
                            {des[1]}
                        </span></li>
                        <li><span onClick={() => setDis2(true)}>
                            {des[2]}
                        </span></li>
                    </ol>
            {dis === true && dis1 == false && dis2 == false ? (
                <p><b>{des[0]}</b><br></br>{descricao[0]}<br></br><br></br>{resposta}</p>
            ) : (
                console.log({dis})
            )}
            {dis === true && dis1 == true && dis2 == false ? (
                <p><b>{des[1]}</b><br></br>{descricao[1]}<br></br><br></br>{resposta}</p>
            ) : (
                <p></p>
            )}
            {dis === true && dis1 == true && dis2 == true ? (
                <p><b>{des[2]}</b><br></br>{descricao[2]}<br></br><br></br>{resposta}</p>
            ) : (
                <p></p>
            )}
                    
                </div>
            )}
        </div>
        /*
                Primeiro descrição 
                if(dis == false && dis1 == false && dis2 == false) setDis(false) e amostra a primeiro descrição

                segunda descrição 
                if(dis == true && dis1 == false && dis2 == false) setDis(false) e amostra a segunda descrição
                
                terceira
                if(dis == false && dis1 == true && dis2 == false) setDis(false) e amostra a terceira descrição
        */
    );
}


/*

um file para login, para lista, discussão




*/