(function () {
  'use strict';

  angular
    .module('demo.app')
    .controller('DogController', DogController);

  function DogController(DogService) {
    console.warn('DogController');

    var vm = this;
    vm.getSound = getSound;

    function getSound() {
      return DogService.getSound();
    }
  }

  DogController.$inject = ['DogService'];

})();
