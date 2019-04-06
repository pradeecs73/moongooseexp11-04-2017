   'use strict';

angular.module('clientApp')
    .service('dashboardservice', ['$http', function($http) {

   var myname="defaultname";

    this.changename = function (inputname) {
        myname=inputname;
    };

    this.getname = function () {
        return myname;
    };
    
}]);