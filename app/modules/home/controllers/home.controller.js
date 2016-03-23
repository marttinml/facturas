/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams) {
        //code
        $rootScope.setIndexQuickMenuActive(0);

        $scope.header = {
            title:"Inicio",
            footer:$scope.footer
        };
    };
    controller.$inject = ['$scope','$rootScope','$routeParams'];
    angular.module('Home').controller('HomeController', controller);

})();