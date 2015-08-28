var m = require("mithril");
var TodoViewModel = require("./../views-model/TodoViewModel");
//here's the view
module.exports = function() {
    return m("html", [
        m("body", [
            m("input", {onchange: m.withAttr("value", TodoViewModel.description), value: TodoViewModel.description()}),
            m("button", {onclick: TodoViewModel.add}, "Add"),
            m("table", [
                TodoViewModel.list.map(function(task, index) {
                    return m("tr", [
                        m("td", [
                            m("input[type=checkbox]", {onclick: m.withAttr("checked", task.done), checked: task.done()})
                        ]),
                        m("td", {style: {textDecoration: task.done() ? "line-through" : "none"}}, task.description()),
                    ])
                })
            ])
        ])
    ]);
};