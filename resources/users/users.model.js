const db = require("../../dbConfig");
const Controllers = require("../../generateControllers");
const dbController = new Controllers(db,'users');

exports.find = function(query) {
    return dbController.find(query);
}

exports.findById =  function(id) {
    return dbController.findById(id)
}

exports.remove =  function(id) {
    return dbController.remove(id);
}

exports.update =  function(body,id) {
    return dbController.update(body,id);
}

exports.create = function(body) {
    return dbController.add(body);
}
