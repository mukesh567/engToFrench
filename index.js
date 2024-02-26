import express from "express";
import  translateRouter  from "./router/apiRoute.js";

const app = express();

app.use(express.json());
app.use("/api", translateRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is start on port ${PORT}`);
});

