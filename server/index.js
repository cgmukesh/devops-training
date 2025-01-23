const http = require("http");
require('dotenv').config();
require('./config/db');

// const App = require("./app");

// const App = require("./modals");

const port = process.env.PORT || 3030

const server = http.createServer(App);

server.listen(port, () => console.log("Server is running on port", port))