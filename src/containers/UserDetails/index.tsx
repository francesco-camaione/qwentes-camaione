import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { AddressModel, CompanyModel, ContactModel } from "../../models/contactModel"
import { PostModel } from "../../models/postModel"
import { getUserPosts } from "../../services/getUserPosts"
import { getUserDetails } from "../../services/getUserDetails"
import { Form } from "./Form"
import { Post } from "../../components/Post"
import "./UserDetails.css"


export function UserDetails(): JSX.Element {
    const userId: number = useSelector((state: any) => state.userId.value)
    const [data, setData] = useState<ContactModel>({} as ContactModel)
    const [post, setPost] = useState<PostModel[]>([] as PostModel[])

    useEffect(() => {
        getUserDetails(userId).then(async response => {
            if (response.ok) {
                setData(await response.json())
            }
        }).catch(error => {
            setData(error)
        })

        getUserPosts(userId).then(async response => {
            if (response.ok) {
                setPost(await response.json())
            }
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
                id={data.id}
                full_name={data.name}
                email={data.email}
                company={data.company}
            />
            <section className="post--section">
                {post_elements}
            </section>

        </div>
    )
}

