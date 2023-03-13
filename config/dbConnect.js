import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.redaysState >= 1) {
    return;
  }

  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};
export default dbConnect;
