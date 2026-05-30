import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import foodRoutes from './Routes/foodRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is my Home Page");
});

app.use('/api/food', foodRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("Connected to db & Server running on port", process.env.PORT),
    );
  })
  .catch((err) => console.error(err));
