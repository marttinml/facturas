/*global angular*/
(function () {

    var angularModules      = ["ngRoute","ngTouch"];
    var customModules       = ["Home","Help","Profil","Inbox","Tiempoaire"];
    var componentsModules   = ["MainHeader","MainFooter","MainMenu",'carriers'];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('App', modules);

})();