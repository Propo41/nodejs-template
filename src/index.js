// const express = require("express");
// const pop = require("@utils");
import { app } from "@/app";
import { pop } from "@/utils/index";

pop();

// Port
const port = process.env.PORT || 4000;

// Listen
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
