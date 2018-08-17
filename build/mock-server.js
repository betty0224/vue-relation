const jsonServer = require('json-server');
var path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname,'../static/data/data.json'));
const middleware = jsonServer.defaults();

const config = require('../mock');

function parseKey(key) {
  var method = 'get';
  var path = key;
  if (key.indexOf(' ') > -1) {
    var splited = key.split(' ');
    method = splited[0].toLowerCase();
    path = splited[1];
  }

  return { method: method, path: path};
}

server.use(middleware);

function createMockHandler (method, path, value) {
  return function mockHandler(...args) {
    const res = args[1];
    if (typeof value === 'function') {
      value(...args);
    } else {
      res.json(value);
    }
  };
}
