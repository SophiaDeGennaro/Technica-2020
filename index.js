import Express from "express";

const app = Express();
const port = 3000;

// get, put, post, delete

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => console.log("listening on port" + port))