const express = require("express");



const app = express();
const db = require("./db")

const Pizza = require('./models/pizzaModel')

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server working!");
});
app.get("/getpizzas", (req, res) => {
    Pizza.find({}, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
        }
    })
});
const port = process.env.PORT || 8000;
app.listen(port, () => 'Server running on port port');
