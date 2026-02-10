const express = require('express');
const app = express();
app.listen(7000);
app.use(express.json()); // json 허용

const userRouter = require("./routes/users");
const channelRouter = require("./routes/channels")

app.use('/', userRouter);
app.use('/channels', channelRouter);
