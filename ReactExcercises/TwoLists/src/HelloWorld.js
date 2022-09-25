import { useState } from "react"


function HelloWorld({name}) {


return (
    <div>
        {
            name ? <h1>Hello, {name}.</h1> : <h1>Hello, stranger.</h1>
        }
    </div>
)

}



export default HelloWorld