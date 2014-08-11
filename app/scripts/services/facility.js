'use strict';

/**
 * @ngdoc service
 * @name pharmioApp.facility
 * @description
 * # facility
 * Factory in the pharmioApp.
 */
angular.module('pharmioApp')
  .service('facility', function ($http, $q, $timeout) {

    this.list = function() {
      return $http.get('/api/facility').then(function(result) {
        return result.data;
      });
    }

    this.listCache = function() {
      return $http.get('/api/facility', {cache: true }).then(function(result) {
        return result.data;
      });
    }
  });
