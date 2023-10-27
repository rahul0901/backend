import express from 'express';
import Hello from './Controllers/GlobalControllers.js';
import Add from './Controllers/Addition.js';
import router from './Routes/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';


const app = express();

dotenv.config();
app.use(morgan('dev'))

app.use((req, res, next)=> {
    // res.send('Hello Rahul')
    console.log('hi from middleware use')
    next();
})

app.use('/controllers', Hello)

app.use('/addition', Add)

app.use('/app/v1', router)


mongoose.connect(process.env.MONGO_URL).then(()=> console.log('database created'))

app.listen(8000, () => console.log("App is running on port 8000 go and check"))