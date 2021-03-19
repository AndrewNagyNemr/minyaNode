const fs = require("fs");

const read = () => {
  const data = fs.readFileSync("database.json", { encoding: "utf-8" });
  return JSON.parse(data);
};

const save = (data) => {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync("database.json", stringifiedData);
};

module.exports = {
  read,
  save,
};
