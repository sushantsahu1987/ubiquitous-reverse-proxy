const express = require('express');
const app = express();

app.all('/', (req, resp, next)=> {

});

app.listen(8080, ()=> {
    console.log('server running on port 80');
});

