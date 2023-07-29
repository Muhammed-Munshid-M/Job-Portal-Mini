const express=require('express');
const dotenv = require('dotenv')

const db = require('./config/connection');
const bodyParser = require('body-parser')

//Routes
const userRouter=require('./routes/user');
const adminRouter=require('./routes/admin');

dotenv.config()

const app=express();


app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({limit:"50mb"}))
db.connect()


app.use('/',userRouter)
app.use('/admin',adminRouter)

const PORT = 3000;
app.listen(PORT, console.log("Server started"))