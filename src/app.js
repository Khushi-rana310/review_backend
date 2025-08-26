const express=require('express');
const aiRoutes=require('./routes/ai.routes')
const cors=require ('cors')
const app=express()

app.use(cors())

app.use(express.json())

app.get('/',(req, res)=>{
<<<<<<< HEAD
    res.send('Server is running')
=======
    res.send('hello world')
>>>>>>> 4b226ea1b49fac9df2200cee4d381658217ba5b8
})

app.use('/ai',aiRoutes)
module.exports=app
