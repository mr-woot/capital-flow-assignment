angular
  .module('SearchService', [])
  .factory('SearchService', SearchService);

function SearchService($http, apiUrl) {
  return {
    searchTrack: function(track) {
      var url = apiUrl + '/searchTrack';
      var config = {params: {track: track}};
      return $http.get(url, config);
    },

    getSearchHistory: function() {
      var url = apiUrl + '/searchHistory';
      return $http.get(url);
    },

    postSearchHistory: function(searchQuery) {
      var data = {
        query: searchQuery
      };
      var url = apiUrl + '/searchHistory';
      return $http.post(url, data);
    },

    deleteSearchHistory: function(idParam) {
      var url = apiUrl + '/searchHistory/' + idParam;
      return $http.delete(url);
    }
  };
}
