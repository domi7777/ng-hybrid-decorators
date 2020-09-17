angular
  .module('demo.app')
  .factory('CatService', CatService);

function CatService(NewCatService) {

  var service = {
    getSound: getSound,
  }

  return service;

  function getSound() {
    return NewCatService.getNewSound();
  }

}

CatService.$inject = ['NewCatService'];
