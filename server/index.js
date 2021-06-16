import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import dataRoute from './routes/shopItemRoute.js';

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors());

app.use('/shop', dataRoute);

app.use('/', (req,res)=>{
  res.send(`This is my Cake Shop's backend`)
})

const PORT = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DBLOGIN}:${process.env.DBPASSWORD}@cluster1.dqgcx.mongodb.net/OhlalaCakeShop`;

mongoose.connect(`${uri}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(()=> app.listen(PORT, ()=> console.log(`everything is fine on port ${PORT}`)))
        .catch((e)=> console.log(e.message));