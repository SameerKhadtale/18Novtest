import express from "express";

const app = express();
app.get('./','req','res')
app.listen(8000, ()=>console.log("App is running on port 8000.."))