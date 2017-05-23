(function () {
  angular
    .module('MainCtrl', [])
    .controller('MainController', MainController);

  function MainController(MainService, ngProgressFactory) {
    var vm = this;

    vm.loader = ngProgressFactory.createInstance();

    vm.tagline = 'The square root of life is pi!';

    vm.trackList = [];

    /**
     * Functions used
     */
    vm.getTracks = getTracks;

    /**
     * Fetches tracks from the API
     */
    function getTracks() {
      vm.loader.start();
      MainService.getTracks()
        .then(function (response) {
          vm.trackList = response.data.tracks.track;
        })
        .finally(function() {
          vm.loader.complete();
        });
    }

    function init() {
      getTracks();
    }
    init();

  };
}());
