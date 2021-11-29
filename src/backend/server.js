import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routers/userRouter';

const app = express();

mongoose.connect('mongodb://localhost/Matchit',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);

app.get('/', (req, res)=>{
    res.send('Server is Ready');
});

app.use((err, req, res, next)=>{
    res.status(500).send({message:err.message});
});