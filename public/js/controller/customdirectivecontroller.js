'use strict';
 var myapp= angular.module('clientApp');
    myapp.controller('customCtrl',
    function ($scope, $location,$http,dashboardApiFactory,nodsemConstants) {
    $scope.username=getCookie("username");
    $scope.person={
       name:"john doe",
       address:"england kapton",
       street:"fifth street",
       zipcode:"12345"
    };

    $scope.formattedAddress=function(person)
    {
       return person.name + ','+person.address+ ',' +person.street+','+person.zipcode;
    }
     

  });

  myapp.directive("searchResult",function(){
         return {
              restrict:'AEC',
              template:'<p>my name is pradeep</p>',
              replace:true

         }

  });

    myapp.directive("searchResultexternal",function(){
         return {
              restrict:'AEC',
              templateUrl:'js/directives/searchresult.html',
              replace:true,
              scope:{
                personName:"@",
                personAddress:"@"
              }

         }

  });

    myapp.directive("searchResultexternalequals",function(){
         return {
              restrict:'AEC',
              templateUrl:'js/directives/searchresultequals.html',
              transclude:true,
              replace:true,
              scope:{
                personObject:"="
              },
              compile:function(elem,attr){
                 return{
                   post:function(scope,elem,attr){
                      
                     }

                   }
                 
                 }
              }

         });

  myapp.directive("searchResultexternalequalswithfunction",function(){
         return {
              restrict:'AEC',
              templateUrl:'js/directives/searchresultequalswithfunction.html',
              replace:true,
              scope:{
                personObject:"=",
                formattedAddressFunction:"&"
              },
              link:function(scope,elem,attr){
                
              }

         }

  });
  

