(function () {
  'use strict';

  angular
    .module('demo.app')
    .controller('OldFrogController', FrogController);

  function FrogController($scope) {
    console.warn('OldFrogController');

    var vm = this;

    vm.getSound = getSound;

    function getSound() {
      return $scope.sound;
    }

  }

  FrogController.$inject = ['$scope'];

})();
