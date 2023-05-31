import fetch from "node-fetch";

export async function randomJoke (req, res, next) {    

    console.log("hello world!")

    let response = await fetch('https://api.chucknorris.io/jokes/random')
    const json = await response.json();
    console.log(json)

    res.json({ joke: json.value })
}

