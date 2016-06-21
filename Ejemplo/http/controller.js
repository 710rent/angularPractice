angular.module("myFirstApp",[])
    .controller("firstcontroller",function ($scope,$http) {
        $scope.arrs =[];
        $scope.newPost = {};
       $http.get("http://jsonplaceholder.typicode.com/posts")
           .success(function (data) {
               console.log(data);
                $scope.arrs = data;
           })
           .error(function (err) {
               console.log(err);
           })
        $scope.addPost = function () {
            $http.post("http://jsonplaceholder.typicode.com/posts",{
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userId: 1
            })
            .success(function (data,status,heaers, config) {
                $scope.arrs.push($scope.newPost);
                $scope.newPost = [];
            })
            .error(function (error) {
                console.log(error);
            })
        }
    });