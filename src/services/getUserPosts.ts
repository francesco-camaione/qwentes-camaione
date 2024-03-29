export async function getUserPosts(userId: number): Promise<Response> {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    return await response
}