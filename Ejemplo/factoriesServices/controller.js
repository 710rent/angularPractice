angular.module("toDoList",["LocalStorageModule"])
    .factory("ToDoService", function (localStorageService) {
        var doService = {};

        doService.key = "listAngular";
        if(localStorageService.get(doService.key)){
            doService.activities = localStorageService.get(doService.key);
        }else {
            doService.activities = [];
        }

        doService.add = function (newActv) {
            doService.activities.push(newActv);
        };

        doService.updaLocalStorage = function () {
            localStorageService.set(doService.key,doService.activities);
        };

        doService.clean = function () {
            doService.activities=[];
            doService.updaLocalStorage();
            return doService.getAll();
        };
        doService.getAll = function () {
            return doService.activities;
        }
        doService.removeItem = function (item) {
            doService.activities=doService.activities.filter(function (activity) {
                return activity !== item;
            });
            doService.updaLocalStorage();
            return doService.getAll();
        }

        return doService;
    })
    .controller("toDoController",function ($scope,ToDoService) {

        $scope.todo = ToDoService.getAll();
        $scope.newActv={};

        $scope.addAct = function () {
            ToDoService.add($scope.newActv);
            $scope.newActv={};
        };

        $scope.removeAct = function (item) {
            $scope.todo = ToDoService.removeItem(item);
        };
        $scope.clean = function () {
            ToDoService.clean();
            $scope.todo = ToDoService.clean();
        };
    });