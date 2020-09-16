(function () {
  'use strict';
  angular
    .module('demo.app')
    .directive('elephant', elephant);

  function elephant() {
    console.warn('elephant()');
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
