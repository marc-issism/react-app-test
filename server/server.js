//node --env-file=config.env server

import express from "express";
import cors from "cors";
import users from "./routes/users.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});