    'use strict';


    angular.module('clientApp')
    .controller('MainCtrl',
    function ($scope, $location,$http,signinApiFactory,nodsemConstants) { 

    var username=getCookie("username");
     if(username != "")
      {
       $location.path(nodsemConstants.PATH.DASHBOARD);
      }
     
    //user signin
    $scope.login = function () {

    $("#validatemessage").html("");
    var email=$("#signinemail").val();
    var password=$("#signinpassword").val();

    if(email == "" || password == "")
    {

     $("#validatemessage").html("Enter the required fields");
    }
    else
    {

     var adddetails={};

     adddetails.email=email;
     adddetails.password=password;

        signinApiFactory.signin(adddetails)
          .then(function (response) {
              if(response.result < 1)
                {                                        
                  $("#validatemessage").html("Invalid email or password");
                }
               else
                {
                  var sessionname=response.data.sessionname[0].username;
                  var sessionemail=response.data.sessionname[0].email; 
                  setCookie("username", sessionname, 30);
                  setCookie("email", sessionemail, 30);
                  $location.path(nodsemConstants.PATH.DASHBOARD);    
                } 
          }, function (error) {
              console.log(error);
          });  

    }            
    };
      $scope.signup = function () {
      $location.path(nodsemConstants.PATH.SIGNUP);
    };

    $scope.forgotpassword = function () {
      $location.path(nodsemConstants.PATH.FORGOTPASSWORD);
    };

    });
