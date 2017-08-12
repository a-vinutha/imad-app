var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'Article One',
    heading : 'Article-One',
    content : `<div><p>Here goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article one
            </p>
        </div>
        <div>
            <p>Here goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article one
            </p>
        </div>
        <div>
            <p>Here goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article oneHere goes the contents for Article one
            </p></div>`
}

var articleTwo = {
    title : 'Article Two',
    heading : 'Article-Two',
    content : `<div><p>Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.
            </p>
        </div>
        <div><p>Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.
            </p>
        </div><div><p>Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.Here goes the contents for Article Two.
            </p>
        </div>`
}

var articleThree = {
    title : 'Article Three',
    heading : 'Article-Three',
    content : `<div><p>Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.
            </p>
        </div>
        <div><p>Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.
            </p>
        </div><div><p>Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.Here goes the contents for Article Three.
            </p>
        </div>`
}

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
        ${heading}
        </h3>
        ${content}
        </div>
    </body>
</html>
`;

return htmlTemplate;    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
   res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req,res){
    res.send(createTemplate(articleTwo));
});

app.get('/article-three', function(req,res){
    res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
