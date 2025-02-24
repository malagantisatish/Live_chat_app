const avatarStyles = ["bottts", "avataaars", "pixel-art"];
const usernames = ["Alice", "Bob", "Charlie"];

export const avatarList = usernames.flatMap((username) => {
    return avatarStyles.map((style) =>`https://api.dicebear.com/7.x/${style}/svg?seed=${username}` )
})



