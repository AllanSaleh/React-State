const games = ["Chess", "Checkers", "GTA"];

// const newGames = games;

// Correct way of copying an array
const newGames = [...games, "Zelda", "Mario", "Tekken"]

newGames.push("Sonic");

console.log("Original Array", games);
console.log("Coppied Array", newGames);



const game = {
    title: "Chess",
    played: false,
    rating: 5
}

const sameGame = {...game, cover:false}

console.log("Original Object", game);
console.log("Coppied Object", sameGame);
