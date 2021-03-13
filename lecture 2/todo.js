const { read, save } = require("./helpers");

const getAll = () => {
  return read();
};

const getOne = (id) => {
  const todos = read();
  return todos.find((todo) => todo.id === id);
};

const create = (data) => {
  const todos = read();
  const lastId = todos[todos.length - 1] ? todos[todos.length - 1].id : 0;
  todos.push({ id: lastId + 1, ...data });
  save(todos);
};

const update = (id, newData) => {
  const todos = read();
  let index = todos.findIndex((todo) => todo.id === id);
  todos[index]= { id, ...newData};
  save(todos);
};

const remove = (id) => {
  const todos = read();
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
  save(todos);
};

module.exports = {
  create, 
  update,
  remove,
  getAll,
  getOne,
};
