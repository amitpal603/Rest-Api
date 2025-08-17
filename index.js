const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.get('/',(req,res) => {
    res.send('Hello Rest Api Test..')
})

const books = [
    {id: Date.now(),
    book : "JavaScript"
    },
    {
        id: Date.now(),
        book: "React js"
    },
    {
        id: Date.now(),
        book : "Node.js"
    }
]

app.get('/get',(req,res) => {
    res.status(200).json({
        success: true,
        data: books
    })
})

app.get('/get/:id',(req,res) => {
    const findData = books.find(item => item.id === req.params.id)

    if(findData){
        res.status(200).json(findData)
    }

    res.status(404).json({
        success: false,
        message: "not found"
    })
})
const PORT = process.env.PORT

app.listen(PORT,() => {
 console.log(`server listen on port no : ${PORT}`);
 
})