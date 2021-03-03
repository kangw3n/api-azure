const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  return res.json({
    state: true,
    message: "API-Services Available 2",
  });
});

app.listen(process.env.PORT || 8080);
