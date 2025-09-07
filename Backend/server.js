const express = require('express')
const dotenv = require('dotenv')
const app  = express();
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

dotenv.config()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
 app.get('/',(req,res)=>{
      res.send("welcome hari")    
});

app.use('/api/workouts/',workoutRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is started and listening at:http://localhost:${PORT} & connected to our db`)
});
})
.catch((error)=>{console.log(error)})

const PORT = process.env.PORT;


