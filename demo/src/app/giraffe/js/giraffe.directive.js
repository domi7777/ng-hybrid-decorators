(function () {
  'use strict';
  angular
    .module('demo.app')
    .directive('demoGiraffe', giraffe);

  function giraffe() {
    var directive = {
      restrict: 'E',
      template: `<demo-new-giraffe [sound]="'Bleat bleat bleat'"></demo-new-giraffe>`,
      controller: 'GiraffeController',
      controllerAs: 'GiraffeCtrl',
    };
    return directive;
  }
})();
