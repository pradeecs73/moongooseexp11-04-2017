'use strict';
  angular.module('clientApp')
    .controller('DashboardCtrl',
    function ($scope, $location,$http,dashboardApiFactory) {
    var username=getCookie("username");
     if(username == "")
      {
       $location.path('/')
      }
  
      $scope.name=username;
    
     $scope.signout = function () {
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      $location.path('/')
    };

   $scope.changepassword = function () {
      $location.path('/changepassword')
    };

     $scope.getallRecords= function(){

       dashboardApiFactory.getallrecords()
          .then(function (response) {
             $scope.userlist=response.data; 
          }, function (error) {
              console.log(error);
          }); 

     }

    });
