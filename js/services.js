angular.module('starter.services', ['ngResource'])

.factory('Complaints', function ($resource) {
    return $resource('http://cci:a1s2d3f4@complaints.cc-interactive.com.ua/imgmt/incidents');
});
