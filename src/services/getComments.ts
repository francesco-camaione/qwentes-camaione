export async function getComments(postId: number) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    return await response.json()
}