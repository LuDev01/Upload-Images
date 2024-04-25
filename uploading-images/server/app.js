const express = require("express");
const cors = require("cors");
require("dotenv").config();
const uploadImage = require("./uploadImage.js");
const connectDB = require("./database/config/db.js");  
const app = express();
const port = 5000;
const Image=require("./model/images.js")

connectDB();

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/uploadImage", (req, res) => {
  const imageName = req.body.name;
  const imageData = req.body.image;

  uploadImage(imageData)
    .then((url) => {
      const newImage=new Image({
        name: imageName,
        image:url
      });
      newImage.save()
        .then(()=>res.json('Image added!'))
        .catch(err=>res.status(400).json('Error: ' + err));
      // res.send({ name: imageName, url: url });
    })
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Upload image project listening at: http://localhost:${port}`);
});
