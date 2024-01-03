const express = require("express");
const blogRouter = require("../routes/BlogRoutes");
const app = express();

//middleware 
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () => {
    console.log("server is running on port 3001");
});

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost//CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);
module.exports = app;