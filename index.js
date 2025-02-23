const  express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const router = require('./routes/userRoutes');
const todoRouter = require('./routes/todoRoutes');
require('dotenv').config()

const app = express()
app.use(cors())


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use("/api/users",  router);
app.use("/api/todos", todoRouter);

app.get('/', (req,res) => res.send('Hello'))

const PORT = process.env.PORT || 8080

app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server started on http://localhost:${PORT}`)
})