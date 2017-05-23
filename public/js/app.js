angular.module('trackListApp', ['ngRoute', 'ngResource', 'appRoutes', 'MainCtrl', 'MainService', 'SearchCtrl', 'SearchService', 'ngProgress'])
  .constant('apiUrl', 'https://cf-backend.herokuapp.com');
