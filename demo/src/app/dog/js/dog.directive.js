(function () {
  'use strict';
  angular
    .module('demo.app')
    .directive('dog', GoodDog);

  function GoodDog() {
    console.warn('Dog()');
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
