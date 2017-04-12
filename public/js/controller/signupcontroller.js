'use strict';

    angular.module('clientApp')
    .controller('signupCtrl',
    function ($scope, $location,$http,signinApiFactory,nodsemConstants) {
    $scope.signin = function () {
       $location.path(nodsemConstants.PATH.SIGNIN);
    };
 
    //user signup
    $scope.register = function () {
        
        $("#validatemessage").html("");
        var name=$("#name").val();
        var username=$("#username").val();
        var email=$("#email").val(); 
        var password=$("#password").val();
        var reg =/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if(name == "" || username == "" || email == "" || password == "")
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else if(!reg.test(email))
    {
      $("#validatemessage").html("Enter valid email");
     }
    else
    {

       var adddetails={};
           adddetails.name=name;
           adddetails.email=email;
           adddetails.username=username;
           adddetails.password=password;

  
      signinApiFactory.signup(adddetails)
          .then(function (response) {
             if(response.data.status=="0")
               {
                 $("#validatemessage").html("User already exist");   
               }
               else
               {
                 $location.path(nodsemConstants.PATH.SIGNIN);
               }  
          }, function (error) {
              console.log(error);
          }); 

    }
    }; 

    });
