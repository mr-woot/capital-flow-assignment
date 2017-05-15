(function () {
  angular
    .module('SearchCtrl', [])
    .controller('SearchController', SearchController);

  function SearchController(SearchService, ngProgressFactory) {
    var vm = this;

    vm.loader = ngProgressFactory.createInstance();

    vm.searchResults = [];

    vm.searchTracks = searchTracks;
    vm.searchKey = "";
    vm.searchFlag = false;

    function searchTracks(track) {
      vm.loader.start();
      SearchService.searchTracks(track)
        .then(function (response) {
            // console.log(response);
          vm.searchResults = response.data.results.albummatches.album;
        })
        .finally(function () {
            vm.searchFlag = true;
            vm.loader.complete();
        });
      // console.log(vm.trackList);
    }
    function init () {
        vm.searchFlag = false;
    }
    init();
  };
}());
