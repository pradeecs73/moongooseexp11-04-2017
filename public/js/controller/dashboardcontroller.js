'use strict';
  angular.module('clientApp')
    .controller('DashboardCtrl',
    function ($scope, $location,$http,dashboardApiFactory,nodsemConstants) {
    var username=getCookie("username");
     if(username == "")
      {
        $location.path(nodsemConstants.PATH.SIGNIN);
      }
  
      $scope.name=username;
      $scope.watchname="pradeep";
    
     $scope.signout = function () {
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
       $location.path(nodsemConstants.PATH.SIGNIN);
    };

   $scope.changepassword = function () {
      $location.path(nodsemConstants.PATH.CHANGEPASSWORD);
    };

    $scope.watchchange = function () {
       $scope.watchname="chandrika";
    };

    $scope.$watch('watchname', function(newvalue,oldvalue) {
    });

     $scope.getallRecords= function(){
        var adddetails={"token":"eyJhbGciOiJIUzI1NiJ9.bXl1c2Vy.6uspByHPOTx66y-nX8mPYEejp2uUZFJ60o7S8P9YzXc"};
       dashboardApiFactory.getallrecords(adddetails)
          .then(function (response) {
             $scope.userlist=response.data; 
          }, function (error) {
              console.log(error);
          }); 

     }

    });
