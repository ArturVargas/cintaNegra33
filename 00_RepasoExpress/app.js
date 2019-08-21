
require('dotenv').config();
const express =require('express');
const mongoose = require('mongoose');
const {verifyTkn} = require('./middlewares/verifyToken');

const app = express();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Conectado a Mongo');
    }
})

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

const {register, login} = require('./controllers/auth');
const {newPost, listPosts, post} = require('./controllers/post');

app.get('/', (req, res) => {
    res.send('<h1>Express Server</h1>')
})

app.post('/new/user', register);
app.post('/login', login);
app.post('/new/post',verifyTkn, newPost);
app.get('/posts', listPosts);
app.get('/post/:id', post);

app.listen(process.env.PORT, () => console.log(`Servidor Corriendo en puerto: ${process.env.PORT}`))