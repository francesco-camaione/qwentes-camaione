export function initials(full_name: string | undefined): string | undefined {
    // return first letter of full-name
    return full_name?.split(" ").map(word => word[0]).join("")
}