import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes  from "./routes/messageRoutes.js";
import userRoutes  from "./routes/userRoutes.js";


import connectToMongoDB from "./db/ConnectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


// app.get("/",(req, res) =>{
//     //root route http://localhost:5000/
//     res.send("Hello world!");
// });


app.listen(PORT,() => {
     connectToMongoDB();
    console.log(`Server running at port ${PORT}`);
});
