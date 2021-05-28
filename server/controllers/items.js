import express from 'express';

import Good from '../models/shopItem.js'

const router = express.Router();

export const getItems = async (req, res)=>{
    try {
        const items = await Good.find()

        res.status(200).json(items)
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