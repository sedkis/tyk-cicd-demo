import { User } from "./types"



export function getUser (req, res, next) {    
    const userId = req.params.id
    if (!userId) {
        res.status(500).send("No Param ID provided!")
        return
    }

    let user: User = users.find( user => user.id == userId)

    if (!user) {
        res.status(500).send("Error finding user.")
        return
    }

    res.json(user)
}

const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
    },
  ]
