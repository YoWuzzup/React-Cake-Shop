import express from 'express';
import Good from '../models/shopItem.js'

const router = express.Router();

export const getItems = async (req, res)=>{
    try {
        let query

        const uiValues = {
            filtering: {},
            sorting: {}
        }

        const reqQuery = { ...req.query }
        // const removeFields = ['default']
        // removeFields.forEach(val => delete reqQuery[val])
        // ^^ Idk for what, gotta google it

        let queryStr = JSON.stringify(reqQuery);

        queryStr = queryStr.replace(
          /\b(gt|gte|lt|lte|in)\b/g,
          (match) => `$${match}`
        );

        query = await Good.find(JSON.parse(queryStr))

        if (req.query.sorting) {
            const sortBy = req.query.sorting.split(',').join(' ');
            if(sortBy === 'lowToHigh'){
                query = await Good.find({
                    price : { $gte: req.query.price.gte, $lte: req.query.price.lte }
                    }).sort({ price: 1 });
            } else if(sortBy === 'highToLow'){
                query = await Good.find({
                    price : { $gte: req.query.price.gte, $lte: req.query.price.lte }
                    }).sort({ price: -1 });
            } else if(sortBy === 'default'){
                query = await Good.find({
                    price : { $gte: req.query.price.gte, $lte: req.query.price.lte }
                    });
            } else if(sortBy === 'popularity'){
                query = await Good.find({
                    price : { $gte: req.query.price.gte, $lte: req.query.price.lte }
                    }).sort({ clicks: 1 });
            } else if(sortBy === 'latest'){
                query = await Good.find({
                    price : { $gte: req.query.price.gte, $lte: req.query.price.lte }
                    }).sort({ date: 1 });
            }
            
        } else {
            query = await Good.find(JSON.parse(queryStr));
        }

        res.status(200).json(query)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createItem = async (req, res)=>{
    const { name, price, discount, sale, description, tags, images } = req.body;

    const newItem = new Good({ name, price, discount, sale, description, tags, images })
    try {
        await newItem.save();

        res.status(201).json(newItem)
    } catch (error) {
        res.status(409).json({ message: error.message })        
    }
}

export const getPost = async (req, res)=>{
    const { id } = req.params

    try {
        const item = await Good.findById(id)

        res.status(201).json(item)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export default router;