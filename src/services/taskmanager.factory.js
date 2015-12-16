/**
 * Created by paulex10 on 16/12/2015.
 */
angular.module('application')
    .factory('taskManager', [TaskManager]);

function TaskManager(){
    var taskPool = [];
    return {
        createTask:function createTask(processName){
            var task = new Task();
            var taskId = getRandomValues();
            task.setId(taskId);
            task.setName(processName);
            taskPool.push(task);
            return taskId;
        },
        removeTask:function removeTask(taskId){
            for(var i=0;i<taskPool.length;i++){
                var cTsk = taskPool[i];
                if(cTsk.id === taskId){
                    taskPool.splice(i, 1);// remove the task item from the pool
                    i--;//lets decrement i so the loop doesn't miss an index
                }
            }
        },
        getTaskPool:function(){
            return taskPool;
        }
    }
}

function getRandomValues(){
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'k', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var randLength = 5;
    var randomVal="";
    for(var i=0;i<randLength;i++){
        randomVal += alpha[Math.floor(Math.random() * (alpha.length))];
        randomVal += Math.floor(Math.random() * (alpha.length));
    }
    return randomVal;
}


function Task(){
    this.id = null;
    this.processName = "";
}

Task.prototype.setName = function(name){
    this.processName = name;
};

Task.prototype.setId = function(id){
    this.id = id;
};