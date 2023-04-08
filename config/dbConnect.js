import mongoose from "mongoose";

const dbConnect = () => {
  // console.log("DATABASEURL ", process.env.DB_URL);
  // return;

  if (mongoose.connection.redaysState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DATABASE CONNECTION ESTABLISHED");
    })
    .catch((err) => {
      console.log("MONGODB ERROR HAPPENED ");
      console.log(err);
    });
};
export default dbConnect;
