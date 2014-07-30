'use strict';

/**
 * @ngdoc service
 * @name pharmioApp.facility
 * @description
 * # facility
 * Factory in the pharmioApp.
 */
angular.module('pharmioApp')
  .factory('facility', function ($http, $q, $timeout) {
    
    var list = function() {
      var deferred = $q.defer();
      var promise = $http.get('/api/facility').success(function (resp) {
          deferred.resolve(resp);
        });
      return deferred.promise;
    }

    return {
      list: list
    };
  });
