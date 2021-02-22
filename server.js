// This app creates a basic web server using Express and illustrates various paths (url) routing.
const express = require('express');

const app = express();

// route to home url
app.get('/', (request,response)=>{
    response.send('Hello World');   
});

// route to test url
app.get('/test',(request,response)=>{
    response.send("This is test url");
});

//route to dynamic url
app.get('/test/:whatever',(request,response)=>{
    let param = request.params.whatever;
    response.send("hello "+ param);
});

//route to query string
app.get('/query',(request,response)=>{
    let param = request.query.whatever; // URL = __/query?whatever=10
    response.send("query string => "+ param);
});



//
app.listen(3000, (request,response)=>{
    console.log('Server Established');
});