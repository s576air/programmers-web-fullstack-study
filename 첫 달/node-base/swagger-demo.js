const { swaggerUi, specs, port } = require('./swagger');

let express = require("express");
let app = express();

app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port);