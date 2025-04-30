import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from "./routes/user.route.js"
import imageRouter from './routes/image.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log('Connected to MongoDB')
})
.catch((err)=>{
  console.log(err)
})

const app = express()
app.listen(3000, ()=>{
    console.log('Server is running on port 3000!!!')
})

app.use(express.json());
app.use(cors())
app.use(cookieParser());

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.use((err, req, res ,next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server error'
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})