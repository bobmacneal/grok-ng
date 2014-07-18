'use strict';

/**
 * @ngdoc function
 * @name grokNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the grokNgApp
 */
angular.module('grokNgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
