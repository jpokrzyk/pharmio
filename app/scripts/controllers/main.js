'use strict';

/**
 * @ngdoc function
 * @name pharmioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pharmioApp
 */
angular.module('pharmioApp')
  .controller('MainCtrl', function ($scope, facility) {
    $scope.facilities = facility.list();
  });
