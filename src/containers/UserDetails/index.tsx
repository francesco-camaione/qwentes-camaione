import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { AddressModel, CompanyModel, ContactModel } from "../../models/contactModel"
import { PostModel } from "../../models/postModel"
import { getUserPosts } from "../../services/getUserPosts"
import { getUserDetails } from "../../services/getUserDetails"
import { Form } from "./Form"
import { Post } from "../../components/Post"
import "./UserDetails.css"

const empty_post = [{
    userId: 0,
    id: 0,
    title: "",
    body: "",
}]

const empty_address: AddressModel = {
    street: "",
    suite: "",
    city: "",
    zipcode: 0,
    geo: { lat: 0, lng: 0 }
}

const empty_company: CompanyModel = {
    name: "",
    catchPhrase: "",
    bs: ""
}

const empty_data: ContactModel = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: empty_address,
    phone: 0,
    website: "",
    company: empty_company
}

export function UserDetails(): JSX.Element {
    const userId: number = useSelector((state: any) => state.userId.value)
    const [data, setData] = useState<ContactModel>(empty_data)
    const [post, setPost] = useState<PostModel[]>(empty_post)

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

