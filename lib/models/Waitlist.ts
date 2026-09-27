import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
  },
  { timestamps: true }
);

// Prevent re-compilation of the model if it already exists
const Waitlist = mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;
