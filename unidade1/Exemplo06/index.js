const express = require('express')
const parser = require('cookie-parser')
const session = require('express-session')
const app = express()
app.use(session({
    secret: 'Ax0$%s14@FX2az1k^2nM',
    resave: true,
    saveUninitialized: true
}))
app.use(parser())

app.get('/contador', (req, res) => {
    let contagem = 0;
    if(req.session.contagem)
        contagem = req.session.contagem;
    contagem++;
    req.session.contagem = contagem;
    res.send(`Valor atual: ${contagem}`);
})

app.get('/setcookie', (req, res) => {
    res.cookie(`Acesso`,`Acessado em ${new Date()}`);
    res.send('Cookie foi salvo com sucesso');
});

app.get('/getcookie', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies['Acesso']);
});

app.get('/', (req, res) => {
    req.session.destroy((error)=>{console.log("Sessao removida")})
    res.send("Sessao removida");
})

app.listen(3000);