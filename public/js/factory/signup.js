   'use strict';

angular.module('clientApp')
    .factory('signinApiFactory', ['$http', function($http) {

    var signinFactory = {};

    signinFactory.signin = function (inputobject) {
        return $http.post("/signin",inputobject);
    };

    signinFactory.signup = function (inputobject) {
        return $http.post("signup",inputobject);
    };

    signinFactory.changepassword = function (inputobject) {
        return $http.post("/changepassword", inputobject);
    };

    return signinFactory;
}]);