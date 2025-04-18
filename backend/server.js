import express from 'express';
import cors from 'cors';

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})