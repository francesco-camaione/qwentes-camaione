import { useState, useEffect } from "react"
import { PostModel } from "../../models/postModel"
import { getData } from "../../services/getData"
import { Post } from "../../components/Post"
import "./PostList.css"

export function PostList() {
    const [posts, setPosts] = useState<PostModel[]>()

    useEffect(() => {

        getData("posts").then(async response => {
            if (response.ok) {
                setPosts(await response.json())
            }
        }).catch(error => {
            setPosts(error)
        })
    }, [])

    const post_elements = posts?.map((post) => {
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
        <section className="postlist">
            <h2 className="posts--title">POSTS</h2>
            {post_elements}
        </section>
    )
}