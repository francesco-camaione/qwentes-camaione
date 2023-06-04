export function initials(full_name: string | undefined): string | undefined  {
    // return first letter of full-name
    if (typeof full_name === undefined) {
        return;
    }
    return full_name?.split(" ").map(word => word[0]).join("")
}