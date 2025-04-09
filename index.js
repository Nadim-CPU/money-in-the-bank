
// LIBRARIES

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// API ENDPOINT ROUTES
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const customerRoutes = require("./routes/customerRoutes");
const loanRoutes = require("./routes/loanRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const loanpaymentRoutes = require("./routes/loanpaymentRoutes");





// INTIALIZE APP

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// ROUTERS

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/loan', loanRoutes);
app.use('/api/loanpayment', loanpaymentRoutes);
app.use('/api/transaction', transactionRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED TO PORT ${PORT}`)
});

