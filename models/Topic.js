const mongoose = require("mongoose");
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
  pomodoreCount: {
    type: Number,
    default: 0
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = Topic = mongoose.model("Topic", TopicSchema);
