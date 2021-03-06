var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/greetings/:name', function (req, res) {
    let searchTerm = req.query.term || "IU";
  var name = req.params.name;
  res.render('greetings', {name: name});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
