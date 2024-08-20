const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/exemplo',(req,res)=>{
    const dados = [{nome:"Carlos", idade:45},
                   {nome:"Joana", idade:36}];
    res.render('exemplo',{pessoas: dados});
});
app.listen(3000);