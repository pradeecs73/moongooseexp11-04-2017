   'use strict';

angular.module('clientApp').factory('sessionInjector',  function() {  
    var sessionInjector = {
        request: function(config) {        
            config.headers['x-session-token'] = "12345";
            return config;
        }
    };
    return sessionInjector;
});

angular.module('clientApp').config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('sessionInjector');
}]);