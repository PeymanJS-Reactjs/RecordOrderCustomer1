const mysql = require("mysql2");

const cors = require("cors");

const express = require("express");

const app = express();

const corsOption = {
  origin: "*",
  methods: "POST , GET",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/", require("./routers"));
app.use("/sendInfo", require("./routers"));
app.use("/Postter/:id", require("./routers"));
app.listen("3009", () => {
  console.log("The server is running on Port 3009");
});
