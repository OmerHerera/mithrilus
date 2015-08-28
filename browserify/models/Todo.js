var m = require("mithril");
//the Todo class has two properties
module.exports = function(data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
};