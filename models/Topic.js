const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
Schema = mongoose.Schema;

const TopicSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  timestamps: [
    {
      type: Date
    }
  ],
  weight: {
    type: Number,
    default: 1
  }
});

module.exports = Topic = mongoose.model("Topic", TopicSchema);
