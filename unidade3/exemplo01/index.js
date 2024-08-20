const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({
    extended: true
}))

let contatos = [{nome: "XPTO", email: "xpto@xpto.com"}];

app.get('/contatos', (req, res) => {
   if(req.query.delId)
      contatos.splice(req.query.delId,1);
   res.render('contatos',{contatos: contatos});
})

app.post('/contatos', (req, res) => {
   contatos.push({nome: req.body.n1, email: req.body.e1}); 
   res.render('contatos',{contatos: contatos});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})