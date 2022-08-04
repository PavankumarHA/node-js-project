

const express = require('express');
const app = express();

const route = require("./route/routes")
app.use(express.json());
app.use('',route)
//app.use('/api/v1/',route)
app.listen(4200);

