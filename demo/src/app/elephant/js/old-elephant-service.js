angular
  .module('demo.app')
  .factory('OldElephantService', function() {

    var service = {
      getSound: getSound,
    }

    return service;

    function getSound() {
      console.warn('OldElephantService.getSound is called');
      return 'Pwoa pwoa pwoaaa';
    }

  });
