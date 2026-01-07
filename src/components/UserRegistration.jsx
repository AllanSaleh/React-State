import { useState } from "react"

const UserRegistration = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        console.log("SENDING API REQUEST WITH THE INFROMATION OF THE FORM:");
        console.log(username, email, password);
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="username"
                onChange={(event) => setUsername(event.target.value)}
                value={username} />

            <input type="email"
                placeholder="email"
                onChange={(event => setEmail(event.target.value))}
                value={email} />

            <input type="password"
                placeholder="password"
                onChange={(event => setPassword(event.target.value))}
                value={password} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UserRegistration