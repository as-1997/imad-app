var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   articleOne:{
    title:'Article-One | Arunima Setua',
    heading: 'Article One',
    date:' sept 2,2017',
    content: `<p>
                This is the content in the first extension to my webApp.Wish me luck.This is Arunima Setua.
                This is the content in the firThis is the content in the firThis is the content in the fir
            </p>
             <p>
                This is the content in the first extension to my webApp.Wish me luck.This is Arunima Setua.
                This is the content in the firThis is the content in the firThis is the content in the fir
            </p>
             <p>
                This is the content in the first extension to my webApp.Wish me luck.This is Arunima Setua.
                This is the content in the firThis is the content in the firThis is the content in the fir
            </p>`
},
   articleTwo:{
    title:'Article-Two |Arunima Setua',
    heading: 'Article-Two',
    date: 'sept 5,2017',
    content: `<p>
                This is the content in the second extension to my webApp.Wish me luck.This is Arunima Setua.
            </p>`

}
};

function createTemplate (data) {
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
    var htmlTemplate= `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/> 
                <link href="/ui/style.css" rel="stylesheet" />
                </head>
            <body>
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3> ${heading} </h3>
                <div>
                    ${date}
                </div>
                <div>
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-one', function (req,res){
res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req,res){
    res.send(createTemplate(articleTwo));
    });

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
