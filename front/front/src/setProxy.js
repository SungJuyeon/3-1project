const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        //front에서 '/api' 로 요청을 보내면 backend인 8080port로 요청이 도착
        createProxyMiddleware({
            target: 'http://localhost:8080',    //server URL
            changeOrigin: true,
        })
    );
};