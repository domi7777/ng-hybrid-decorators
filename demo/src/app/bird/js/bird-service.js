angular
  .module('demo.app')
  .factory('BirdService', function() {

    var service = {
      getSound: getSound,
    }

    return service;

    function getSound() {
      console.warn('BirdService.getSound is called');
      return 'chirp chirp chirp';
    }

  });
