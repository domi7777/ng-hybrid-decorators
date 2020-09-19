(function () {
  'use strict';
  angular
    .module('demo.app')
    .directive('demoOldFrog', oldFrog);

  function oldFrog() {
    var directive = {
      restrict: 'E',
      template: 'A frog does "{{ OldFrogCtrl.getSound() }}"',
      controller: 'OldFrogController',
      controllerAs: 'OldFrogCtrl',
      scope: {
        sound: '='
      }
    };
    return directive;
  }
})();
