export async function patchUserDetails(userId: number, name: string, email: string, company_name: string) {

    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json; charset=UTF-8", },
        body: JSON.stringify({
            name: name,
            email: email,
            company: { name: company_name },
        })
    })
    return await response
}