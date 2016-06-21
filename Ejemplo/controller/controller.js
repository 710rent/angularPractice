var app=angular.module("MyfirstApp",[]);

app.controller("FirstController",function ($scope) {
    $scope.name = "Robert Josue";
    $scope.newcoment = {};

    $scope.comentarios=[{
            comentario:"Muy bueno",
            username: "user1"
        },
        {
            comentario:"Muy Malo",
            username: "user2"
        },
        {
            comentario:"si pasa",
            username: "710rent"
        }
    ];
    
    $scope.addComent = function () {
        $scope.comentarios.push($scope.newcoment);
        $scope.newcoment = {};
    }
});
