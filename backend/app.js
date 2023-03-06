const express = require('express');
const app = express();
const port = 3000

// Especifica que o mecanismo de modelo a ser utilizado é o EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Rota que renderiza uma visualização (view)
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.get('/editar', (req, res) => {
    res.render('editar_perfil')
})

app.get('/explorar', (req, res) => {
    res.render('explorar')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/perfil', (req, res) => {
    res.render('perfil')
})
app.get('/editar_perfil', (req, res) => {
    res.render('editar_perfil')
})

app.get('/publicacao', (req, res) => {
    res.render('publicacao')
})

app.get('/saias', (req, res) => {
    res.render('saias')
})

app.listen(port, () => console.log(`Server aberto ${port}!`))