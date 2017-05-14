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
    vm.getTopAlbums = getTopAlbums;

    /**
     * Fetches tracks from the API
     */
    function getTopAlbums() {
      vm.loader.start();
      MainService.getTopAlbums()
        .then(function (response) {
          vm.trackList = response.data.topalbums.album;
        })
        .finally(function() {
          vm.loader.complete();
        });
    }

    function init() {
      getTopAlbums();
    }
    init();

  };
}());
