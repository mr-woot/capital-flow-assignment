(function () {
  angular
    .module('MainCtrl', [])
    .controller('MainController', MainController);

  function MainController(MainService) {
    var vm = this;

    vm.tagline = 'The square root of life is pi!';

    vm.trackList = [];

    /**
     * Functions used
     */
    vm.fetchAllTracks = fetchAllTracks;

    /**
     * Fetches tracks from the API
     */
    function fetchAllTracks() {
      // var results = MainService.get();
      // results.$promise.then(function(data) {
      //   var res = data.results;
      //   vm.trackList = res;
      // });
      MainService.getTopAlbums()
        .then(function (response) {
          vm.trackList = response.data.topalbums.album;
        });
      // console.log(vm.trackList);
    }

    /**
     * Add new track to the API
     */
    function addNewTrack(trackName) {
      vm.trackList.push(trackName);
    }

    function init() {
      fetchAllTracks();
    }
    init();

  };
}());
