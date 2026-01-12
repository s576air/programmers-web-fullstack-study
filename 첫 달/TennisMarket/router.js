function route(pathname, handle, response) {
    console.log('pathname: ' + pathname); // localhost:8888/hello에서 hello 부분

    let result = handle[pathname];
    if (typeof result == 'function') {
        result(response);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.write('not found');
        response.end();
    }
}

exports.route = route;