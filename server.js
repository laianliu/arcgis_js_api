const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const app = express();

var config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
app.use(express.static(config.repository));

http.createServer(app).listen(config.port, () => {
    console.log("服务已启动,请勿关闭窗口...")
});

