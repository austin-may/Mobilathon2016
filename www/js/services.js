angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'test' && pw == 'att') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})



.factory('requests', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var requests = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Volunteer',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Chapter Coordinator',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'Chapter Coordinator',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Volunteer',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'Volunteer',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return requests;
    },
    remove: function(request) {
      requests.splice(requests.indexOf(request), 1);
    },
    get: function(requestId) {
      for (var i = 0; i < requests.length; i++) {
        if (requests[i].id === parseInt(requestId)) {
          return requests[i];
        }
      }
      return null;
    }
  };
});
