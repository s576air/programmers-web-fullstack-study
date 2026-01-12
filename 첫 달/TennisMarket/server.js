let http = require('http'); // http 모듈
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) { // 요청, 응답
        let pathname = url.parse(request.url).pathname; // 최근에는 new URL(); 쓴다고 함
        route(pathname, handle, response);
    }

    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

exports.start = start;