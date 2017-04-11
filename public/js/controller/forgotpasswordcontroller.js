'use strict';


    angular.module('clientApp')
    .controller('forgotpasswordCtrl',
    function ($scope, $location,$http) {
     $scope.resetpassword = function () {

    $("#validatemessage").html("");

    var forgotpasswordemail=$("#forgotpasswordemail").val();
    var reg =/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
      text += charset.charAt(Math.floor(Math.random() * charset.length));
     var adddetails={};

    adddetails.forgotpasswordemail=forgotpasswordemail;
    adddetails.newpassword=text;

      if(forgotpasswordemail == "" )
       {

        $("#validatemessage").html("Enter the required fields");
       }
     else if(!reg.test(forgotpasswordemail))
      {
        $("#validatemessage").html("Enter valid email");
      }
     else
      {

        $http.post("/forgotpassword",adddetails)
       .success(function(response) 
      {
       
      if(response.status=="0")
       {                                        
          $("#validatemessage").html("Please enter registered email id"); 
       }
      else
       {
           alert("New password sent to your mail check your inbox"); 
            $location.path('/') 
       }  

      }).error(function(response)
        {
            alert(response);
         });

     }
   };

  });
