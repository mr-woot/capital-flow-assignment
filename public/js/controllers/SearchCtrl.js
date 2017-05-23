(function () {
  angular
    .module('SearchCtrl', [])
    .controller('SearchController', SearchController);

  function SearchController(SearchService, ngProgressFactory) {
    var vm = this;

    vm.loader = ngProgressFactory.createInstance();

    vm.searchResults = [];

    vm.searchTrack = searchTrack;
    vm.searchKey = "";
    vm.searchFlag = false;

    vm.searchHistoryList = [];

    function searchTrack(track) {
      vm.loader.start();
      SearchService.searchTrack(track)
        .then(function (response) {
          console.log(response);
          vm.searchResults = response.data.results.trackmatches.track;
        })
        .then(function(){
          postSearchHistory(track);
        })
        .finally(function () {
            vm.searchFlag = true;
            vm.loader.complete();
        });
    }

    function postSearchHistory(track) {
      if (!track) return;
      SearchService.postSearchHistory(track)
      .then(function(response) {
        console.log(JSON.stringify(response, undefined, 2));
      })
      .catch(function(err) {
        console.log(JSON.stringify(error));
      });
    }

    function getSearchHistory() {
      SearchService.getSearchHistory()
      .then(function(response) {
        var array = response.data.history;
        vm.searchHistoryList = array.map(item => item.query).filter((value, index, self) => self.indexOf(value) === index)
      })
      .catch(function(error) {
        console.log(JSON.stringify(error));
      });
    }

    function init () {
        vm.searchFlag = false;
        getSearchHistory();
    }
    init();
  };
}());
