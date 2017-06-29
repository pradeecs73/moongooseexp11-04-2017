   'use strict';

angular.module('clientApp')
    .factory('dashboardApiFactory', ['$http', function($http) {

    var dashboardFactory = {};

    dashboardFactory.getallrecords = function (inputobject) {
        return $http.get("/api/getallRecords",{params:inputobject});
    };

   

    return dashboardFactory;
}]);