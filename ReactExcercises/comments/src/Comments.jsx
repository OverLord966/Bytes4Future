import { useState } from "react"

export default function Comments({ user, comments }) {
    const [coms, SetComs] = useState(comments)
    const [comment, SetComment] = useState("")


    const HandleSubmit = (e) => {
        e.preventDefault()
        SetComs(prevComs => prevComs.concat({ text: comment, date: new Date(), postedBy: user.username }))
        SetComment("")
    }
    const HandleChange = (e) => {
        SetComment(e.target.value)

    }
    return (
        <div>
            {coms.map(comment => (
                <div key={comment.date.valueOf() + comment.postedBy}>
                    <p>Por: {comment.postedBy}</p>
                    <p>Em: {comment.date.toString().slice(0, 15)}</p>
                    <p>{comment.text}</p>
                </div>
            ))}
            <div>
                <form onSubmit={HandleSubmit} role="form">
                    <input value={comment} type={"text"} onChange={HandleChange}></input>
                    <button type="submit">Submeter FormulÃ¡rio</button>
                </form>
            </div>
        </div>
    )
} 