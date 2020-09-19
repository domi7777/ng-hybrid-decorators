(function () {
  'use strict';
  angular
    .module('demo.app')
    .directive('demoElephant', elephant);

  function elephant() {
    var directive = {
      restrict: 'E',
      template: 'An elephant does "{{ ElephantCtrl.getSound() }}"',
      controller: 'ElephantController',
      controllerAs: 'ElephantCtrl',
      // scope: {
      //   addressAccountInfo: '='
      // }
    };
    return directive;
  }
})();
