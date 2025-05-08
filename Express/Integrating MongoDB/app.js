const express = require("express");
const {connectToDb, getDb} = require("./db.js");
const {ObjectId} = require("mongodb");

app = express();
app.use(express.json());

let db;

connectToDb((err) => {
    if (!err){
        app.listen(3000, ()=> {
            console.log("Running on port 3000");
        });
        db = getDb();
    }
});

app.get("/", (req, res)=>{
    res.send("This is the homepage");
});

app.get("/avengers", (req, res)=>{
    let avengers = [];
    /* res.json([
        {"name" : {"first_name" : "Ashok", "last_name" : "Bhatt"}, "email" : "ashokbhatt2048@gmail.com"},
        {"name" : {"first_name" : "Irfan", "last_name" : "Ansari"}, "email" : "irfanansari2466@gmail.com"}
    ]); */
    db.collection("Avengers")
        .find()
        .sort({"debut movie" : 1})
        .forEach((avenger) => {
            avengers.push(avenger);
        })
        .then(() => {
            res.status(200).json(avengers);
        })
        .catch(()=> {
            res.status(500).json({error : "Couldn't fetch the documents!"});
        })
});

app.get("/avengers/:name", (req, res) => {
    db.collection("Avengers")
        .findOne({name : req.params.name})
        .then((avenger) => {
            res.status(200).json(avenger);
        })
        .catch((err) => {
            res.status(500).json({error : "Couldn't find the document with the specified objectId!"});
        });
});

app.get("/avengers/id/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection("Avengers")
        .findOne({_id : new ObjectId(req.params.id)})
        .then((avenger) => {
            res.status(200).json(avenger);
        })
        .catch((err) => {
            res.status(500).json({error : "Couldn't find the document with the specified objectId!"});
        });
    } else {
        res.status(500).json({error : "Invalid ObjectId"});
    }
});

app.get("/avengers/page", (req, res) => {
    const pageNo = req.query.p || 0;
    const pageSize = 3;
    db.collection("Avengers")
        .find()
        .sort({"name" : 1})
        .skip(pageNo*3)
        .limit(pageSize)
        .toArray()
        .then((avengers) => {
            res.status(200).json(avengers);
        })
        .catch(()=> {
            res.status(500).json({error : "Couldn't fetch the documents!"});
        })
});

app.post("/avengers", (req, res) => {
    const avenger = req.body;
    db.collection("Avengers")
        .insertOne(avenger)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch ((err) => {
            res.status(500).json({error : "Couldn't insert the document"});
        })
});

app.delete("/avengers/id/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection("Avengers")
            .deleteOne({_id : new ObjectId(req.params.id)})
            .then((avenger) => {
                res.status(200).json(avenger);
            })
            .catch((err) => {
                res.status(500).json({error : "Couldn't delete the record of the avenger from the record!"});
            });
    } else {
        res.status(500).json({error : "Invalid ObjectId"});
    }
});

app.patch("/avengers/id/:id", (req, res) => {
    let updates = req.body;
    if (ObjectId.isValid(req.params.id)) {
        db.collection("Avengers")
            .updateOne({_id : new ObjectId(req.params.id)}, {$set : updates})
            .then((avenger) => {
                res.status(200).json(avenger);
            })
            .catch((err) => {
                res.status(500).json({error : "Couldn't update the avenger from the record!"});
            });
    } else {
        res.status(500).json({error : "Invalid ObjectId"});
    }
})