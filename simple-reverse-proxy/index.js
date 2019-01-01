const express = require('express');
const app = express();

app.all('/*', (req, resp, next) => {

    console.log(` request hostname: ${req.hostname}`);
    console.log(` request original url: ${req.originalUrl}`);
    console.log(` request path: ${req.path}`);
    console.log(` request subdomains: ${req.subdomains}`);

    resp.send({
        max: 'result'
    });
});

app.listen(8080, () => {
    console.log('server running on port 80');
});