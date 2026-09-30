// models/Site.js
import mongoose from 'mongoose';

const SiteSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    name: { type: String, required: true },
    industryId: { type: String, required: true },
    theme: { type: String, required: true },
    template: { type: mongoose.Schema.Types.Mixed, required: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Site || mongoose.model('Site', SiteSchema);