export default function Lista(props) {

    function TemTitulo() {
        if (props.titulo !== undefined) {
            return <h1>{props.titulo}</h1>
        }
    }

    return (
        <div>
            <div>
                < TemTitulo />
            </div>
            <div>
                {props.itens.map((item) => (
                    <li key={item}>{item}</li>
                )
                )
                }
            </div>
        </div>
    )
}