import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: false },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    fatherCategory: { type: String, required: true },
    brand: { type: String, required: false },
    stock: { type: Number, required: false },
    sku: { type: String, required: false, unique: true },
    createdAt: { type: Date, default: Date.now },
    productStatus: { type: Boolean, default: true},
    labelType: { type: [String], required: false }
}, {
    timestamps: true,
    versionKey: false
})


export default model('Product', productSchema);