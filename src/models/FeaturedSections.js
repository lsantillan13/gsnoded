import { Schema, model } from 'mongoose';

const featuredSectionSchema = new Schema({
  section: { type: String, required: true, unique: true },
  productIds: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  order: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
}, {
  timestamps: true,
  versionKey: false
});

export default model('FeaturedSection', featuredSectionSchema);