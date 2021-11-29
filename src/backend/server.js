import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routers/userRouter.js';
import data from './data.js';

const app = express();



app.get('/api/partidas',(req,res)=>{
    res.send(data.partidas);
})

app.use('/api/users', userRouter);

app.get('/', (req, res)=>{
    res.send('Server is Ready');
});

app.use((err, req, res, next)=>{
    res.status(500).send({message:err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});