'use strict';
  angular.module('clientApp')
    .constant('nodsemConstants',
     {
    
       PATH:
          {
             SIGNIN:'/',
             SIGNUP:'/signup',
             FORGOTPASSWORD:'/forgotpassword',
             CHANGEPASSWORD:'/changepassword',
             DASHBOARD:'/dashboard'
          },
       FILEPATH:
          {
             SIGNIN:'js/view/main.html',
             SIGNUP:'js/view/signup.html',
             FORGOTPASSWORD:'js/view/forgotpassword.html',
             CHANGEPASSWORD:'js/view/changepassword.html',
             DASHBOARD:'js/view/dashboard.html'
          }

    });
