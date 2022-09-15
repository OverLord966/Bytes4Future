import { useState } from "react"

export default function PasswordInput(){

    const [password, setPassword] = useState("")
    const [focado, setFocado] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false);
    const handleChange = (evento) => {
        setPassword(evento.target.value)
    }
    const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
    };
    function handleMouseDown() {
      setPasswordShown(!passwordShown)
    }
    function handleMouseUp(){
      setPasswordShown(!passwordShown)
    }
    return(
        <div>
            <label>Password: </label>
            <input type={passwordShown ? "text" : "password"} role={"input"} onFocus={() => setFocado(true)} value={password} onChange={(e) => handleChange(e)}/>
            {focado && password.length > 0 && (
                <p role={"feedback"}>
                    {
                        password.length > 10 ? "Password Forte" : password.length > 6 ? "Password Média" : password.length > 0 ? "Password Fraca" : ""
                    }
                </p>
            )}
            <button onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>Show Password</button>
        </div>
    )
}