angular.module('starter.services', ['ngResource'])

.factory('Complaints', function ($resource) {
    return $resource('http://incident-manager.cc-interactive.com.ua/imgmt/incidents');
});
