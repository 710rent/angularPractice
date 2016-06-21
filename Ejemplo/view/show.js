angular.module("showandhide",[])
    .controller("control",function ($scope,$http) {
        $scope.arrs =[];
        $scope.status = true;

        $http.get("http://jsonplaceholder.typicode.com/posts")
            .success(function (data) {
                console.log(data);
                $scope.arrs = data;
                $scope.status = false;
            })
            .error(function (err) {
                console.log(err);
                $scope.status = false;
            })
    });
