import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setPostId } from "../../redux/feature/postId"
import "./Posts.css"

interface Props {
    postId: number,
    userId: number,
    title: string,
    body: string,
}

export function Post(props: Props) {
    const dispatch = useDispatch()
    return (
        <Link to="/posts/post-details" className="post--article" onClick={() => dispatch(setPostId(props.postId))}>
            <article>
                <h4>{props.title}</h4>
                <p>{props.body}</p>
            </article>
        </Link>
    )
}