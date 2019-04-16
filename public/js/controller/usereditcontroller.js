'use strict';
  angular.module('clientApp')
    .controller('usereditCtrl',
    function ($scope,$rootScope,$timeout, $location,$http,dashboardApiFactory,nodsemConstants,dashboardservice,$routeParams) {
    var username=getCookie("username");
    $scope.loginusername=username;
     alert($routeParams.id);
     alert($location.search().target);
     

    });
