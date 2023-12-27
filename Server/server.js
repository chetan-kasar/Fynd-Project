// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const fs = require('fs');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const multer  = require('multer')

const cors = require('cors');
const app = express();

//mongoose.connect('mongodb://localhost:27017/imageDB', { useNewUrlParser: true, useUnifiedTopology: true });

const ImageSchema = new mongoose.Schema({
  data:Buffer
});

const Image = mongoose.model('Image', ImageSchema);

global.titleImageBuff = "";
global.albumImagesBuff = [];

app.use(cors());

const upload = multer();
app.use(bodyParser.json());

app.post('/add', async (req, res) => {
    const database = client.db("mydb");
    const mycollection = database.collection("mycollection");
    req.body.userData.titleData.titleImage = global.titleImageBuff;
    req.body.userData.albumData.photos = albumImagesBuff;
    const result = await mycollection.insertOne(req.body.userData);

});

app.get('/get', async (req, res) => {

  const database = client.db("mydb");
  const mycollection = database.collection("mycollection");

  const result = await mycollection.find({}).toArray();
  res.json(result);

  console.log(result);

});

app.post('/upload', upload.single("titleImage"), async (req, res) => {

  if(req.file)
  {
    const fileData = req.file.buffer;
    global.titleImageBuff = fileData;
  }
  else
  {
    const imageFile = fs.readFileSync('./titleImg/Travel.jpg');
    global.titleImageBuff = imageFile;
    console.log(global.titleImageBuff);
  }
  /*const database = client.db("mydb");
  const mycollection = database.collection("mycollection"); 
  const result = await mycollection.insertOne({mydata:fileData});

  const storedImage = await mycollection.findOne();
  const base64Image = storedImage.mydata.toString('base64'); 
  const dataUrl = `data:image/jpeg;base64,${base64Image}`;
  console.log(dataUrl);*/

  res.send("Data received");

  /*if(req.file)
  global.titleImageName = req.file.filename;

  else
  global.titleImageName = "Travel.jpg";*/

});

app.post('/album', upload.array("photoAlbum", 30), async (req, res, next) => {
    const doc = req.files.map(e=>(e.buffer));
    const doc1 = doc.map(e=>({e}));
    global.albumImagesBuff = doc1;
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
