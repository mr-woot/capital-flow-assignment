(function () {
  angular
    .module('SearchCtrl', [])
    .controller('SearchController', SearchController);

  function SearchController(SearchService) {
    var vm = this;
    vm.searchResults = [];

    vm.searchTracks = searchTracks;
    vm.searchKey = "";
    vm.searchFlag = false;

    function searchTracks(track) {
      SearchService.searchTracks(track)
        .then(function (response) {
            // console.log(response);
          vm.searchResults = response.data.results.albummatches.album;
        })
        .finally(function () {
            vm.searchFlag = true;
        });
      // console.log(vm.trackList);
    }
    function init () {
        vm.searchFlag = false;
    }
    init();
  };
}());
