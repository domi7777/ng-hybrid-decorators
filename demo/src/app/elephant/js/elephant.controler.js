(function () {
  'use strict';

  angular
    .module('demo.app')
    .controller('ElephantController', ElephantController);

  function ElephantController(ElephantService) {

    var vm = this;
    vm.getSound = getSound;

    function getSound() {
      return ElephantService.getSound();
    }
  }

  ElephantController.$inject = ['ElephantService'];

})();
