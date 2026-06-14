import express from 'express' 
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'

dotenv.config({ quiet: true })


const app = express()


app.get('/' , (request , response) => {
    response.json({
        message : "server is running vivek" + (process.env.PORT || 8000)
    })
})

const PORT = process.env.PORT || 8000

connectDB().then(()=> {
    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.error('Failed to connect to the database:', error)
})
