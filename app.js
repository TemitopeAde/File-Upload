require("dotenv").config();
const express = require("express");
const app = express()
const productRoute = require("./router/route")
const connectDB = require("./db/connect")
app.use(express.json());

app.use("/api/v1/products", productRoute)


const port = process.env.PORT || 5000;


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);   
    }
}

start()
