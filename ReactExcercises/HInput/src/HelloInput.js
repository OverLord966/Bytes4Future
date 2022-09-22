import { useState } from "react"
export default function HelloInput() 
{    
    const [message, setMessage] = useState('')    
    const handleChange = event => {        
        setMessage(event.target.value)    }
        return (    
        <div>        
            <input type="text" id="message" name="message" onChange={handleChange} value={message}></input>
            <p>Hello, {message}!</p>    
            </div>
        )
}   