import express from "express";

const app = express();
const PORT = 3001;

app.get ("/", (_, res) => {
    res.send("Euchre server is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});