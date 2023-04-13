const express = require('express')
const app = express();

const cors = require('cors');
app.use(express.json(), cors());

const dotenv = require('dotenv');
dotenv.config();

const connectDB =require('./config/mongoose.config')
connectDB();

const authorRouter = require('./routes/author.routes')
app.use('/api/author', authorRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));