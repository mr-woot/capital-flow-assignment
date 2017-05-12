angular
  .module('MainService', [])
  .factory('MainService', MainService);

function MainService($http) {
  return {
    getTopAlbums: function () {
        var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=rj&api_key=843f438cd2f8d32dd7eefa9f06edfd7f&format=json";
        return $http.get(url);
    }
  };
}
