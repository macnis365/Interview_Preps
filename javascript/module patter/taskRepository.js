var repo = function () {
    return {
        get: function (id) {
            console.log('Getting task ' + id);
            return {
                name: 'name task from db'
            }
        },
        save: function (task) {
            console.log('saving ' + task.name + ' to db');
        }
    }
}
/*another way of doing above modular pattern more documented way
var repo = function(){
    //reveling module pattern
    var db = {};
    var get = function(id){
                          console.log('Getting task '+id);
                          return{
                              name: 'name task from db'
                          }
    }

    var save = function(task){
                           console.log('saving '+task.name+' to db');
                       }

    return {
        get: get,
        save: save
    }
}*/



module.exports = repo();
