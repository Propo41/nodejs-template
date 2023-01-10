import express from "express";

const app = express();

const testFunction = () => {
  return "success";
};

export { app, testFunction };
