//window.todo = {};

todo = {
        controller: require("./controllers/TodoController"),
        view:       require("./views/TodoView")
};

var m = require("mithril");

//initialize the application
m.mount(document, {controller: todo.controller, view: todo.view});