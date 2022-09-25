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