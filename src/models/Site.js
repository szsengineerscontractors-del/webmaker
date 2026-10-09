// src/models/Site.js
import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    subdomain: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
      set: (v) => (v === '' ? undefined : v),
    },
    name: { type: String, required: true },
    industryId: { type: String, required: true },
    theme: { type: String, required: true },
    template: { type: mongoose.Schema.Types.Mixed, required: true },
    published: { type: Boolean, default: true },
    listed: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

SiteSchema.index({ listed: 1, published: 1, createdAt: -1 });

export default mongoose.models.Site || mongoose.model('Site', SiteSchema);