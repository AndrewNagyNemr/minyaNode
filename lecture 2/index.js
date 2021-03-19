const fs = require("fs");
const { create, update, remove, getAll, getOne } = require("./todo");

const [, , option, arg1, arg2, arg3] = process.argv;

switch (option) {
  case "add":
    create({
      title: arg1,
      body: arg2,
    });
    break;
  case "list":
    console.log(getAll());
    break;
  case "get":
    console.log(getOne(+arg1));
    break;
  case "edit":
    update(+arg1, {
        title : arg2,
        body : arg3
    })
    break;
  case "remove":
      remove(+arg1)
    break;
}

// JSON.stringify() => save in the json file
// JSON.parse() => parse string into JS object

// const strigifiedObject= JSON.stringify(input)

// console.log(typeof strigifiedObject);

// fs.writeFileSync("database.json", JSON.stringify(input));

// const result = fs.readFileSync("database.json", { encoding: "utf-8" });

// const parsedResult = JSON.parse(result);

// console.log(parsedResult.title);
