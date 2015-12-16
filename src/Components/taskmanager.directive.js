/**
 * Created by paulex10 on 16/12/2015.
 */
angular.module('application')
    .directive('taskManager', function(){
        return {
            restrict: 'E',
            templateUrl :'../Components/taskmanager.directive.html'
        }
    });