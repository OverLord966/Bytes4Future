export default function HelloWorld({name}){

    return(

            <h1>Hello, {name === undefined ? "stranger" : name}.</h1>

    )
}