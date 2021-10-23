let express = require("express");
let npm = require("date-fns/addDays");
let app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let result = npm(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
