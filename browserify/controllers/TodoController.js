var vm = require("./../views-model/TodoViewModel");
//the controller defines what part of the model is relevant for the current page
//in our case, there's only one view-model that handles everything
module.exports = function() {
    vm.init();
};