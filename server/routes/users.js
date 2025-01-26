import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

// router will be used to define routes.
const router = express.Router();


// get all users
router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find().toArray();
    res.send(results).status(200);
});

router.get("/", async (req, res) => {
    let collection = await db.collection("timeBlocks");
    let results = await collection.find().toArray();
    res.send(results).status(200);
})


// get user by userID
// router.get("/:userID", async(res, req) => {
//     let collection = await db.collection("users");
//     let query = { userID: userID}
//     let result = await collection.findOne(query);

//     if (!result) res.send("Not found").status(404);
//     else res.send(result).status(200);
// })

// create new user



export default router;

