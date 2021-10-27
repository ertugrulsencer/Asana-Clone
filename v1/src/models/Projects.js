const Mongoose = require("mongoose");

const ProjectSchema = Mongoose.Schema(
  {
    name: String,
    // user_id: {
    //   type: Mongoose.Types.ObjectId,
    //   red: "user",
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = Mongoose.model("project", ProjectSchema);
