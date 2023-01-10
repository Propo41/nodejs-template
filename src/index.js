// const express = require("express");
// const pop = require("@utils");
import { app, testFunction } from "./app.js";

testFunction();

// Port
let port = process.env.PORT || 4000;

// Listen
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
