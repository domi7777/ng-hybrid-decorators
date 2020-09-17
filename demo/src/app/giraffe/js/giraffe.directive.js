(function () {
  'use strict';
  angular
    .module('demo.app')
    .directive('giraffe', giraffe);

  function giraffe() {
    var directive = {
      restrict: 'E',
      template: `<new-giraffe [sound]="'Bleat bleat bleat'"></new-giraffe>`,
      controller: 'GiraffeController',
      controllerAs: 'GiraffeCtrl',
    };
    return directive;
  }
})();
