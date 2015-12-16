/**
 * Created by paulex10 on 16/12/2015.
 */
angular.module('application')
    .controller('TaskController', ['taskManager',TaskController]);


function TaskController(taskManager){
    this.taskPool = taskManager.getTaskPool();
}