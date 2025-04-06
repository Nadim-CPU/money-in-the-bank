
// LIBRARIES

const express = reuqire("express");
const bodyParser = require("body-parser");
const cors = require("cors");








// INTIALIZE APP

const app = express();

require(".env").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED TO PORT ${PORT}`)
});

