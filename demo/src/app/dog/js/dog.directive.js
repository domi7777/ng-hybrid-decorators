(function () {
  'use strict';
  angular
    .module('demo.app')
    .directive('demoDog', GoodDog);

  function GoodDog() {
    var directive = {
      restrict: 'E',
      template: 'A dog does "{{ DogCtrl.getSound() }}"', //require('./dog.template.html'), TODO?
      controller: 'DogController',
      controllerAs: 'DogCtrl',
      // scope: {
      //   addressAccountInfo: '='
      // }
    };
    return directive;
  }
})();
