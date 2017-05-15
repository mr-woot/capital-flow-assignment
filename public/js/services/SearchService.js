angular
  .module('SearchService', [])
  .factory('SearchService', SearchService);

function SearchService($http) {
  return {
    searchTracks: function (searchKey) {
        var url = "https://ws.audioscrobbler.com/2.0/?method=album.search&album=" + searchKey + "&api_key=843f438cd2f8d32dd7eefa9f06edfd7f&format=json";
        return $http.get(url, {});
    }
  };
}
