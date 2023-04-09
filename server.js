import  express  from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors';

//App config
const app=express();
const port=process.env.PORT || 8001;
const connection_url="mongodb+srv://abhishekverma:r2eWFSuOGyENLGva@cluster0.iwls7dh.mongodb.net/?retryWrites=true&w=majority"
//middle ware
app.use(express.json());
app.use(Cors());
// DB config
mongoose.connect(connection_url,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
})


//API endpoints
app.get("/",(req,res)=>res.status(200).send("HEY datify users"));

app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;

Cards.create(dbCard,(err,data)=>{
    if(err){
        res.status(500).send(err)}
        else {
             res.status(200).send(data)} 
        
    
})
})

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})


//Listener
app.listen(port,()=>console.log(`listening on localhost:${port}`))