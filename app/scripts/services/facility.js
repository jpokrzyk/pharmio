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

    this.listCacheMock = function(field) {
      var deferred = $q.defer();
      deferred.resolve([{"facilityId":64,"hospfLib":"HOSPF064","orderfLib":"ORDERF064","division":2,"state":"TX","hostname":"S00064","location":"Abilene, TX","name":"Abilene Regional Medical Center","connectionString":"jdbc:as400://S00064/ORDERF064;naming=sql;errors=full","city":"Abilene"}]);
      return deferred.promise;
    }

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
