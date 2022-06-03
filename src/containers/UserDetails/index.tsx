import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { ContactModel } from "../../models/contactModel"
import { PostModel } from "../../models/postModel"
import { getUserPosts } from "../../services/getUserPosts"
import { getUserDetails } from "../../services/getUserDetails"
import { Form } from "./Form"
import { Post } from "../../components/Post"
import "./UserDetails.css"

export function UserDetails() {
    const userId: number = useSelector((state: any) => state.userId.value)
    const empty_post = [{
        userId: 0,
        id: 0,
        title: "",
        body: "",
    }]
    const [data, setData] = useState<ContactModel>()
    const [post, setPost] = useState<PostModel[]>(empty_post)

    useEffect(() => {
        getUserDetails(userId).then(response => {
            setData(response)
        }).catch(error => {
            setData(error)
        })

        getUserPosts(userId).then(response => {
            setPost(response)
        }).catch(error => {
            setPost(error)
        })
    }, [userId])

    const post_elements = post.map((post: PostModel) => {
        return (
            <Post
                key={post.id}
                postId={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
            />
        )
    })

    return (
        <div>
            <Form
                id={data?.id}
                full_name={data?.name}
                email={data?.email}
                company={data?.company}
            />
            <section className="post--section">
                {post_elements}
            </section>

        </div>
    )
}