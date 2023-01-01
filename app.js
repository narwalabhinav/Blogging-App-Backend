import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

mongoose.set('strictQuery', true);
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect(
    "mongodb+srv://admin:rRX3bPTRayN9m54N@cluster0.wlsbbia.mongodb.net/?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000))
    .then(()=>
    console.log("Connected to database and listening localhost:5000")
    )
    .catch((err)=>console.log(err));

//rRX3bPTRayN9m54N