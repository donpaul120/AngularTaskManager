# AngularTaskManager
For monitoring task in angular application

The taskmanager is basically for displaying current task
that is ongoing in the application.
You can use the task manager to monitor http request etc
and also to display to the user what that application is currently doing..
e.g **currently downloadind a file**, **updating your profile details...** etc


## Usage

1. Import the neccessary task manager files to your html
  ```html
  <script src="../Components/taskmanager.directive.js"></script>
  <script src="../Service/taskmanager.factory.js"></script>
  <link rel="stylesheet" href="../assets/css/task_manager.css"/>
  ````
  
2.  Insert the task manager directive to your html
  ```html
  <task-manager></task-manager>
  ````

## Code Example

```javascript
angular.module('application')
  .controller('BooksController', ['bookService', BooksController]);
  
function BooksController(bookService){
  this.bookSvc = bookService;
}

BooksController.prototype.getAllBooks = function(){
  this.bookSvc.retrieveAllBooks(function(result){
    //do something with the result
  });
};

BooksController.prototype.getAuthorBooks = function(authorName){
  this.bookSvc.getBooksByAuthor(authorName, function(result){
    //do something with the result
  });
};


//BookService Class

angular.module('application')
  .controller('bookService', ['$http', 'taskManager', BookService]);

function BookService($http, taskManager){
  this.taskMgr = taskManager;
  this.httpSvr = $http;
}

BookService.prototype.retrieveAllBooks = function(callback){
  if(typeof callback === function){
    var taskID = this.taskMgr.createTask('retrieving all books...');
    this.httpSvr.get('http://your_webserice_url/books') 
      .then(function(response){
          if(response.data.status==="success"){
          //your choice
          }
          //remove the task from the pool
          this.taskMgr.removeTask(taskID);
      },
        function(error){
          //remove the task here also as its not currently running any more
          this.taskMgr.removeTask(taskID);
        }
      );
  }
};

BookService.prototype.getBooksByAuthor = function(authorName, callback){
  if(typeof callback === function){
    var taskID = this.taskMgr.createTask('retrieving books by '+ authorName+ '');
    this.httpSvr.get('http://your_webserice_url/books/'+authorName) 
      .then(function(response){
          if(response.data.status==="success"){
          //your choice
          }
          //remove the task from the pool
          this.taskMgr.removeTask(taskID);
      },
        function(error){
          //remove the task here also as its not currently running any more
          this.taskMgr.removeTask(taskID);
        }
      );
  }
};
````

## Preview Example

![alt-text]( https://github.com/donpaul120/AngularTaskManager/blob/master/src/assets/images/angula_task_mgr_ex.png "Example" )

## Contributions

