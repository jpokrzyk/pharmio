'use strict';

/**
 * @ngdoc function
 * @name pharmioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pharmioApp
 */
angular.module('pharmioApp')
  .controller('MainCtrl', function ($scope, facility, $http) {

  	$scope.loading = true;
  	var _list;

  	var bindList = function bindList(data) {
  		if ( !angular.equals(_list, data) ) {
  			$scope.facilities = data;
  			_list = data;
  			$scope.loading = false;
  		}
  	}

  	facility.listCache()
  		.then(bindList)
  		.then(facility.list().then(bindList));

    // facility.listCache().then(function(data) {
    // 	$scope.facilities = data;
    // });

  // show the report button when hovering on the row
    $scope.hover = function(facility) {
      return facility.showReportButton =! facility.showReportButton;
    };

  });
