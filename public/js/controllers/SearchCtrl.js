let test;
(function () {
  angular
    .module('SearchCtrl', [])
    .controller('SearchController', SearchController);

  function SearchController(SearchService, ngProgressFactory) {
    var vm = this;
    test = vm;
    vm.loader = ngProgressFactory.createInstance();

    vm.searchResults = [];

    vm.searchTrack = searchTrack;
    vm.searchKey = "";
    vm.searchFlag = false;
    vm.hFlag = -1;

    vm.searchHistoryList = [];

    function searchTrack(track) {
      vm.loader.start();
      SearchService.searchTrack(track)
        .then(function (response) {
          vm.searchResults = response.data.results.trackmatches.track;
        })
        .then(function(){
          postSearchHistory(track);
        })
        .finally(function () {
            vm.searchFlag = 1;
            vm.loader.complete();
        });
    }

    function postSearchHistory(track) {
      if (!track) return;
      SearchService.postSearchHistory(track)
      .then(function(response) {
        if (vm.searchHistoryList.indexOf(track) === -1) {
            vm.searchHistoryList.push(track);
        }
        vm.hFlag = 1;
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
        if (response.data.count === 0) {
          vm.hFlag = 0;
          vm.searchHistoryList.splice(0, vm.searchHistoryList.length);
        } else {
          vm.hFlag = 1;
        }
      })
      .catch(function(error) {
        console.log(JSON.stringify(error));
      });
    }

    function init () {
        getSearchHistory();
    }
    init();
  };
}());
