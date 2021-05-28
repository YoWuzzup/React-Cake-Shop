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


const PORT = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DBLOGIN}:${process.env.DBPASSWORD}@cluster1.dqgcx.mongodb.net/OhlalaCakeShop`;

mongoose.connect(`${uri}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(()=> app.listen(PORT, ()=> console.log(`everything is fine on port ${PORT}`)))
        .catch((e)=> console.log(e.message));



  // const Schema = mongoose.Schema
  // const BookSchema = new Schema({
  //   name : String,
  //   purchaseMethod : String,
  //   price: Number,
  //   hello: Number
  // })
  // const Model = mongoose.model
  // const Goods = Model('Goods', BookSchema)

  // const NodeJsGuide = new Good({
  //   name : 'NodeJS : A Guide' , 
  //   price: 45})
//   NodeJsGuide.save((err,result)=>{
//     if(err) console.log(err);
//   })
  // Goods.deleteOne({name: 'NodeJS : A Guide'},(err,result)=>{
  // })
  // const a = Goods.find({});

  // app.get('/', (req, res) => {
  //   Goods.find({}, (err , user) => {
  //     res.json({user})
  //     console.log(res)
  //   })
  // })