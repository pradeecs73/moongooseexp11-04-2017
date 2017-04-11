   'use strict';

angular.module('clientApp')
    .factory('dashboardApiFactory', ['$http', function($http) {

    var dashboardFactory = {};

    dashboardFactory.getallrecords = function () {
        return $http.get("/getallRecords");
    };

   

    return dashboardFactory;
}]);