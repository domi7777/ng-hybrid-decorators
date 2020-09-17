angular
  .module('demo.app')
  .factory('BirdService', function() {

    var service = {
      getSound: getSound,
    }

    return service;

    function getSound() {
      return 'chirp chirp chirp';
    }

  });
