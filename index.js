const express = require("express"); //import

const mongoose  = require("mongoose");
mongoose.connect('mongodb://localhost:27017/youtube').then(() =>{
console.log("DB connected");
});
const app = express();  //making app

app.use(express.json());
app.get('/video',(req,res)=>{
    
    res.send("Hello from get");
    })

app.post('/video',(req,res)=>{
    console.log(req.body);
    const videos=[
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"},
        {tittle:"videos",thumbnail:"dgfsdgfhkyu"}];
    res.send(videos);
})
app.patch('/video',(req,res)=>{
    res.send("Hello from patch");
})
app.listen(3001,onServerStart); //listening app and add port &callback function

function onServerStart(){
    console.log("Server Started");   
}