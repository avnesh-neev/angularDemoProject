(function (angular) {
    'use strict';
    angular.
        module('myServiceModule', []).
        config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'login.html'
                })
                .when('/dashboard', {
                    templateUrl: 'dashboard.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }).
        controller('MyController', ['$scope', 'notify', function ($scope, notify) {
            $scope.callNotify = function (msg) {
                notify(msg);
            };
        }]).

        factory('notify', ['$window', function (win) {
            var msgs = [];
            return function (msg) {
                msgs.push(msg);
                if (msgs.length === 3) {
                    win.alert(msgs.join('\n'));
                    msgs = [];
                }
            };
        }]);
})(window.angular);
