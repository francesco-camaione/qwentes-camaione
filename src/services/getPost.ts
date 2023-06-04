export async function getPost(postId: number): Promise<Response> {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    return await response
}