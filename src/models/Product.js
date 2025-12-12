import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    isNew: { type: Boolean, default: false },
    brand: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    productStatus: { type: Boolean, default: true},
    labelType: { type: [String], required: false },
    // featuredInSections: { type: [String], default: [] },
    // NUEVO: Array de secciones donde aparece
    featuredIn: {
        type: [{
            type: String,
            enum: [
                'novedades',
                'regalos-empresariales', 
                'articulos-promocionales',
                'indumentaria-deportiva',
                'indumentaria-trabajo',
                'egresados',
                'verano',
                'gorras'
            ]
        }],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
})


export default model('Product', productSchema);