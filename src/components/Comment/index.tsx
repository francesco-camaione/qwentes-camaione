import "./Comment.css"

interface Props {
    comment_name: string,
    comment_body: string
} 

export function Comment(props: Props) {
    return (
        <article className="comment--article">
            <h4>{props.comment_name}</h4>
            <p>{props.comment_body}</p>
        </article>
    )
}