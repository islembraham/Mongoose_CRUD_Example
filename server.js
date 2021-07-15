const express = require('express')
const createAndSaveUser=require("./config/connect")
const search=require("./config/connect")

const app = express()
app.use(express.json())


//Create and save User function
search.createAndSaveUser()

//Find User ByName, Food, ID function

search.findUser(['Nwasser', 'Fraise'], 'Islem')

//Update User

search.findUserAndUpdate('Islem')

//Delete User

search.findUserAndDelete('60f019029db55e433cfb0a13')

//Delete All User

search.findUserAndRemove('Islem')

//Get Specific user

search.chainQuery()





const port = process.env.PORT || 5000
app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on http://localhost:${port}`)
})