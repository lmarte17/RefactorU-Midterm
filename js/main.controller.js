angular.module('myApp')
    .controller('appController', appController)
    .controller('SportsController', sportsController)
    .config(myRouter);

myRouter.$inject = ['$routeProvider'];
sportsController.$inject = ['$http'];


function myRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/sports', {
            templateUrl: 'templates/sports.html'
        })
        .when('/signup', {
            templateUrl: 'templates/signup.html'
        })
};


function appController() {
    var ctrl = this;
    console.log("it's working!");
}

function sportsController() {
  var sCtrl = this;
  sCtrl.getSportNews = function() {
    $http.get('https://newsapi.org/v1/sources?category=sport&apiKey=b5a5796607794df6ada10b439d80729a')
    .then(function(res, status) {
      console.log(res.data);
      sCtrl.sData = res.data;
    }, function(res, status) {
      console.log('Failure: ' + res);
    });
  }
}
