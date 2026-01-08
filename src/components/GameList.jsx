import { useState } from "react"

const GameList = () => {

    const [game, setGame] = useState(""); //state variable set up to collect value from form
    const [games, setGames] = useState([]) //arrays should have a default value of an empty array

    const handleSubmit = event => {
        event.preventDefault();
        const gameObj = {
            title: game, //titile collected from the user
            isPlayed: false //boolean default false
        }
        setGames([...games, gameObj]);
        setGame("");
    }

    const handleRemove = gameName => {
        const newGames = games.filter(gameSelected => gameSelected.title != gameName);
        setGames(newGames)
    }

    const handleToggle = idx => {
    const newGames = games.map((gameObj, GameIdx) => {
        if(idx === GameIdx){
            return { ...gameObj, isPlayed: !gameObj.isPlayed };
        }
        return gameObj;
    });
    setGames(newGames);
}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Game Title"
                    onChange={(event) => setGame(event.target.value)}
                    value={game}
                />
                <button type="submit">Submit</button>
            </form>
            <h3>My Games List</h3>
            <ul>
                {
                    games.map((game, idx) => (
                        <div key={idx} style={{backgroundColor: game.isPlayed ? "green" : "transparent"}}>
                            <li >{game.title}</li>
                            <button onClick={() => handleToggle(idx)} >{game.isPlayed ? "Played" : "Uncheck"}</button>
                            <button onClick={() => handleRemove(game.title)} >Remove</button>
                        </div>
                    ))
                }
            </ul>
        </>
    )
}

export default GameList