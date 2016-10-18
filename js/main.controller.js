angular.module('myApp')
    .controller('appController', appController)
    .controller('WorldController', worldController)
    .controller('USAController', usaController)
    .controller('SportsController', sportsController)
    .controller('LocalController', localController)
    .config(myRouter);

myRouter.$inject = ['$routeProvider'];
worldController.$inject = ['$http'];


function myRouter($routeProvider) {
    $routeProvider
        .when('/world', {
            templateUrl: 'templates/world.html'
        })
        .when('/USA', {
            templateUrl: 'templates/USA.html'
        })
        .when('/sports', {
            templateUrl: 'templates/sports.html'
        })
        .when('/local', {
            templateUrl: 'templates/local.html'
        })
};


function appController() {
    var ctrl = this;
    console.log("it's working!");
}

function worldController($http) {
  var wCtrl = this;
  wCtrl.getWorldNews = function() {
    $http.get('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=b5a5796607794df6ada10b439d80729a')
    .then(function(res, status) {
      console.log(res.data);
      wCtrl.wData = res.data;
    }, function(res, status) {
      console.log('Failure: ' + res);
    });
  };
}


function usaController($http) {
  var uCtrl = this;
  uCtrl.getUSNews = function() {
    $http.get('https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=b5a5796607794df6ada10b439d80729a')
    .then(function(res, status) {
      console.log(res.data);
      uCtrl.uData = res.data;
    }, function(res, status) {
      console.log('Failure: ' + res);
    });
  };
}

function sportsController($http) {
  var sCtrl = this;
  sCtrl.getSportNews = function() {
    $http.get('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=b5a5796607794df6ada10b439d80729a')
    .then(function(res, status) {
      console.log(res.data);
      sCtrl.sData = res.data;
    }, function(res, status) {
      console.log('Failure: ' + res);
    });
  };
}


function localController($http) {
  var lCtrl = this;
  lCtrl.getLocalNews = function() {
    $http.get('https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=b5a5796607794df6ada10b439d80729a')
    .then(function(res, status) {
      console.log(res.data);
      lCtrl.lData = res.data;
    }, function(res, status) {
      console.log('Failure: ' + res);
    });
  };
}
