'use strict';

  
angular.module('clientApp')
    .controller('changepasswordCtrl',
    function ($scope, $location,$http,signinApiFactory) {

     $scope.changeuserpassword = function () {
 
       $("#validatemessage").html("");

       var useremail=getCookie("email");
       var changepassword=$("#changepassword").val();
       var confirmchangepassword=$("#confirmchangepassword").val();

       var adddetails={};
       adddetails.useremail=useremail;
       adddetails.userpassword=changepassword;

       if(changepassword == "" || confirmchangepassword == "")
        {

            $("#validatemessage").html("Enter the required fields");
        }
        else if(changepassword != confirmchangepassword)
        {
            $("#validatemessage").html("password mismatch");
        }
        else
        {

          signinApiFactory.changepassword(adddetails)
            .then(function (response) {
                   document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                   document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";  
                   $location.path('/')    
                  
            }, function (error) {
                console.log(error);
            }); 

        }  
     
    };

});
