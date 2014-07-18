'use strict';

/**
 * @ngdoc function
 * @name grokNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the grokNgApp
 */
angular.module('grokNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
