import { useState } from "react"

export default function PasswordInput(){

    const [password, setPassword] = useState("")
    const [focado, setFocado] = useState(false)
    const handleChange = (evento) => {
        setPassword(evento.target.value)
    }
    return(
        <div>
            <label>Password: </label>
            <input type={"password"} role={"input"} onFocus={() => setFocado(true)} value={password} onChange={(e) => handleChange(e)}></input>
            {focado && password.length > 0 && (
                <p role={"feedback"}>
                    {
                        password.length > 10 ? "Password Forte" : password.length > 6 ? "Password Média" : password.length > 0 ? "Password Fraca" : ""
                    }
                </p>
            )}
        </div>
    )
}

/* Cria um componente PasswordInput.

O componente deve incluir um campo de texto do tipo password e com a role="input".

Sempre que se escreve no campo de texto, deve alterar o valor do mesmo e verificar a força da password.

A força da password deve ser uma de quatro possibilidades, "" quando o campo está vazio, "Password Forte" 
quando o comprimento da password é maior do que 10, 
"Password Média" quando o comprimento é maior do que 6 e "Password Fraca" nos outros casos.

Deve ser renderizado um parágrafo com a role="feedback" quando:

O campo de texto já foi focado.

Quando a força da password é diferente de "". */