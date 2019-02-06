require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 8000;
const cors = require('cors')

const app = express();
const models = require("./models/");

app.use(cors());
app.use(logger("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.use("/api/servicetype", require("./routes/servicetype"));
app.use("/api/payment_type", require("./routes/payment_type"));
app.use("/api/review_services", require("./routes/review_services"));
app.use("/api/user_service_type", require("./routes/userservicetype"));
app.use("/api/order", require("./routes/order"));
app.use("/api/order_detail", require("./routes/order_detail"));

// models.sequelize.sync().then(function() {
app.listen(PORT, () => console.log(`Open localhost:${PORT}`));
// })
