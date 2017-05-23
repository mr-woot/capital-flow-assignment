angular
  .module('MainService', [])
  .factory('MainService', MainService);

function MainService($http, apiUrl) {
  return {
    getTracks: function() {
      var url = apiUrl + '/tracks';
      return $http.get(url);
    }
  };
}


// API Endpoints

// DOMAIN_URL = 'https://cf-backend.herokuapp.com'

// GET    getTracks():             /tracks
// POST   searchTrack(track):      /searchTrack?track=''

// GET    getSearchHistory():      /searchHistory
// POST   postSearchHistory():     /searchHistory
// DELETE deleteSearchHistory():   /searchHistory/:id(type: ObjectID)