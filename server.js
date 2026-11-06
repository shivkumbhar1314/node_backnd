
import express from 'express'

const app = express()

// Middleware to read JSON request body
app.use(express.json())

// GET API - Get all students
app.get('/students', (req, res) => {
    res.send("Hello shivaprasad kumbhar");
})

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
