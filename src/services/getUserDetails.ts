export async function getUserDetails(userId: number) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    return await response.json()
}