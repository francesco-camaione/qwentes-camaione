export async function getComments(postId: number): Promise<Response> {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    return await response
}