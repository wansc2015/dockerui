angular.module('hosts', [])
.controller('HostsController', ['$scope', 'Hosts', 'ViewSpinner', 
function($scope, Hosts, ViewSpinner) {
    ViewSpinner.spin();
    Hosts.get({}, function(d) { 
	    $scope.hosts = d; 
		ViewSpinner.stop();
	});
}]);
