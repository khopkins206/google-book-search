const path = require("path");
const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use(express.static(path.join(__dirname, "../client/build/")));

router.use("/api", apiRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
