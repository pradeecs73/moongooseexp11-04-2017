
'use strict';

angular.module('clientApp', ['ngRoute'])
.config(function ($routeProvider,nodsemConstants) {
  $routeProvider
  .when(nodsemConstants.PATH.SIGNIN, {
    templateUrl: nodsemConstants.FILEPATH.SIGNIN,
    controller: 'MainCtrl'
  })
  .when(nodsemConstants.PATH.DASHBOARD, {
    templateUrl: nodsemConstants.FILEPATH.DASHBOARD,
    controller: 'DashboardCtrl'
  })
  .when(nodsemConstants.PATH.SIGNUP, {
    templateUrl: nodsemConstants.FILEPATH.SIGNUP,
    controller: 'signupCtrl'
  })
  .when(nodsemConstants.PATH.FORGOTPASSWORD, {
    templateUrl: nodsemConstants.FILEPATH.FORGOTPASSWORD,
    controller: 'forgotpasswordCtrl'
  })
  .when(nodsemConstants.PATH.CHANGEPASSWORD, {
    templateUrl: nodsemConstants.FILEPATH.CHANGEPASSWORD,
    controller: 'changepasswordCtrl'
  }).when(nodsemConstants.PATH.CUSTOM, {
    templateUrl: nodsemConstants.FILEPATH.CUSTOM,
    controller: 'customCtrl'
  })
});