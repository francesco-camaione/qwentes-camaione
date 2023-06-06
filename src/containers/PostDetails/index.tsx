import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ContactDescription } from "../../components/ContactDescription"
import { Comment } from "../../components/Comment"
import { CommentModel } from "../../models/commentModel"
import { PostModel } from "../../models/postModel"
import { getComments } from "../../services/getComments"
import { getPost } from "../../services/getPost"
import { getUserDetails } from "../../services/getUserDetails"
import { ContactModel } from "./../../models/contactModel"
import "./PostDetails.css"

export function PostDetails(): JSX.Element {
    const [postInfo, setPostInfo] = useState<PostModel>()
    const [author, setAuthor] = useState<ContactModel>()
    const [comments, setComments] = useState<CommentModel[]>()
    const postId: number = useSelector((state: any) => state.postId.value)
    const userId: number = useSelector((state: any) => state.userId.value)

    useEffect(() => {
        getPost(postId).then(async response => {
            if (response.ok) {
                setPostInfo(await response.json())
            }
        }).catch(error => {
            throw new Error(error)
        })

        getUserDetails(userId).then(async response => {
            if (response.ok) {
                setAuthor(await response.json())
            }
        }).catch(error => {
            throw new Error(error)
        })

        getComments(postId).then(async response => {
            if (response.ok) {
                setComments(await response.json())
            }
        }).catch(error => {
            throw new Error(error)
        })
    }, [postId, userId])

    const comment_elements = comments?.map((comment: CommentModel) => {
        return (
            <Comment
                key={comment.id}
                comment_name={comment.name}
                comment_body={comment.body}
            />
        )
    })
    return (
        <div className="postdetails">
            <h4 className="post-title">{postInfo?.title}</h4>
            <div className="contact--description">
                <ContactDescription
                    id={postId}
                    full_name={author?.name}
                    address={author?.address.street}
                    city={author?.address.city}
                />
            </div>
            <p className="post--body">{postInfo?.body}</p>
            <div className="comments--div">
                <h2 className="comments--title">COMMENTS</h2>
                {comment_elements}
            </div>
        </div>
    )
}