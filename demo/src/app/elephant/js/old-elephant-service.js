angular
  .module('demo.app')
  .factory('OldElephantService', function() {

    var service = {
      getSound: getSound,
    }

    return service;

    function getSound() {
      return 'Pwoa pwoa pwoaaa';
    }

  });
