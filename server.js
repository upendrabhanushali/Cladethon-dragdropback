import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import path from 'path';
import uiRoute from './ui/ui.route'
import pageRoute from './pages/page.route'
import assetRoute from "./assets/assets.route";
const app= express();
app.use(express.json());
const corsOptions={
    origin: function(origin, callback){
        callback(null, true)
    }
}

corsOptions.credentials=true

app.use(cors(corsOptions));

app.use('/resources', express.static(path.join(__dirname,'public')))
app.use('views', express.static(path.join(__dirname,'views')))

//mongouri
const mongoUri='mongodb://localhost:27017/webpage_builder';
mongoose.connect(
    mongoUri
)


app.set('view engine', 'hbs')
app.use('/pages',pageRoute)
app.use('assets',assetRoute)
app.use("/",uiRoute)




const PORT= process.env.PORT || 8085;

app.listen(PORT, ()=>{
    console.log('Server is up on port: '+PORT);
})
