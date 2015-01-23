/*var server = require("./modules/node_modules_interaction/server");
var router = require("./modules/node_modules_interaction/router");
var requestHandlers = require("./modules/node_modules_interaction/requestHandlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.initServer(router.route, handle);
*/

var shopItems = [
    {   id: 1, desc: "car"   },
    {   id: 2, desc: "bus"   },
    {   id: 3, desc: "moto"   }
];

var express = require("./node_modules/express");
var path    = require('path');
var bodyParser  = require('body-parser');

var app = express();

//Configuration 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//END

//Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'bower_components')));

//END


//Routes
app.get('/', function(req, res){
    res.render("./login/login.ejs", {
        title: "Ño",
        items: shopItems
    });
});

app.get('/login', function(req, res){
    
});

app.post('/add', function(req, res){
    var newItem = req.body.newItem;
    shopItems.push(
        {
            id: shopItems.length+1, desc: newItem });
        
    res.redirect('/');
});


//END

app.listen(1337, function(){
    console.log("Application ready on 13378");
});