angular
  .module('demo.app')
  .factory('CatService', CatService);

function CatService(NewCatService) {

  var service = {
    getSound: getSound,
  }

  return service;

  function getSound() {
    console.warn('CatService.getSound is called');
    return NewCatService.getNewSound();
  }

}

CatService.$inject = ['NewCatService'];
