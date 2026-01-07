import { useState } from "react"
import "./Toggle.css"

const Toggle = () => {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLiked(!liked);
        if (liked) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
    }

    return (
        <>
            <h1 className={liked ? "background-pink": ""}>This is a Post</h1>
            <p>Number of Likes: {likes}</p>
            <button onClick={handleLike}>{liked ? "Unlike" : "Like"}</button>
        </>
    )
}

export default Toggle