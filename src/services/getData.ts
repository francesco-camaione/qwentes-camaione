type Target = "users" | "posts"

export async function getData(target: Target) {
    // get contacts or posts based on parameter - target should be: users or posts 
    const url = `https://jsonplaceholder.typicode.com/${target}`
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    return await response.json()
}
