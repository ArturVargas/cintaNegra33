
const express =require('express');

const app = express();
const PORT = 3000;

const {register, login} = require('./controllers/auth');
const {newPost, listPosts, post} = require('./controllers/post');

app.get('/', (req, res) => {
    res.send('<h1>Express Server</h1>')
})

app.post('/new/user', register);
app.post('/login', login);
app.post('/new/post', newPost);
app.get('/posts', listPosts);
app.get('/post/:id', post)

app.listen(PORT, () => console.log(`Servidor Corriendo en puerto: ${PORT}`))