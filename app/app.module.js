/*global angular*/
(function () {

    var angularModules      = ["ngRoute","ngTouch"];
    var customModules       = ["Home"];
    var componentsModules   = ["MainHeader","alDialog"];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('App', modules);

})();