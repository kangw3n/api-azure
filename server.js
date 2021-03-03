const express = require("express");
const fetch = require("node-fetch");

const app = express();

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "00 00 00 * * *",
  function () {
    fetch("https://ivftpe.com/api/scheduler.php");
  },
  null,
  true,
  "	Asia/Taipei"
);
job.start();

app.get("/", async (req, res) => {
  return res.json({
    state: true,
    message: "API-Services Available 2",
  });
});

app.listen(process.env.PORT || 8080);
