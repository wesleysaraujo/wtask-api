import express from "express";
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.json({
    status : "wTask Api OK!"
}));

app.listen(PORT, () => console.log("wTask API - por "+PORT));
