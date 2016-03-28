/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams) {
        //code

        $scope.dialogIVAShow = false;
        $scope.dialogISRShow = false;
        $scope.header = {
            title:"Facturas"
        };

        $scope.tabsConfig = [
            { show : false, title:'Factura'},
            { show : true, title:'Producto'}
        ];

        $scope.tableList = [
            {
                item        : 'Pelota',
                count       : 1,
                priceByUnit : 10,
                subtotal    : 10
            },
            {
                item        : 'Lapicito',
                count       : 2,
                priceByUnit : 2,
                subtotal    : 4
            },
            {
                item        : 'Sonrisa',
                count       : 1,
                priceByUnit : 0,
                subtotal    : 0
            }
        ];

        $scope.tabSelect = function($index){
            for( i = 0 ; i < $scope.tabsConfig.length ; i++ ){
                $scope.tabsConfig[i].show = false;
            }
            $scope.tabsConfig[$index].show = true;
        };

        $scope.showIVA = function(row, $index){
            $scope.dialogIVAShow = true;
            $scope.dialogIVA = {
                title:'IVA - '+ row.item,
                buttons : [
                    {
                        label:'Eliminar',
                        action:function(){
                            $scope.dialogIVAShow = false;
                        }
                    },
                    {
                        label:'Agregar',
                        action:function(){
                            $scope.dialogIVAShow = false;
                        }
                    }
                ]
            };
        };
        $scope.showISR = function(row, $index){
            $scope.dialogISRShow = true;
            $scope.dialogISR = {
                title:'ISR - '+ row.item,
                buttons : [
                    {
                        label:'Eliminar',
                        action:function(){
                            $scope.dialogISRShow = false;
                        }
                    },
                    {
                        label:'Agregar',
                        action:function(){
                            $scope.dialogISRShow = false;
                        }
                    }
                ]
            };
        };

        $scope.removeItem = function($index){
            $scope.tableList[$index].removing = true;
            setTimeout(function(){
                $scope.tableList.splice($index,1);
                $scope.$apply();
            },500);
            
        };

    };
    controller.$inject = ['$scope','$rootScope','$routeParams'];
    angular.module('Home').controller('HomeController', controller);

})();