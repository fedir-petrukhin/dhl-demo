angular.module('starter.services', ['ngResource'])

.factory('Complaints', function ($resource) {
    return $resource('http://complaints.cc-interactive.com.ua/imgmt/incidents');
});
