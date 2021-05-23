import mongoose from 'mongoose';

const shopItemSchema = mongoose.Schema({
    name: String,
    price: Number,
    discount: Number,
    sale: Boolean,
    description: String,
    tags: [String],
    images: [String]
});

const Good = mongoose.model('Good', shopItemSchema);

export default Good;