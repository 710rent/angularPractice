angular.module("mainModule",[])
    .filter("removeHtml",function () {
        return function (text) {
            return String(text).replace(/<[^>]+>/gm,'');
        }
    })

    .controller("filterController",function ($scope) {
        $scope.mi_html = "<p>Que Onda</p>";
    });