angular.module('dockerServices', [])
.controller('ServicesController', ['$scope', 'DockerService', 'ViewSpinner', 
function($scope, DockerService, ViewSpinner) {
    ViewSpinner.spin();
    DockerService.query({}, function(d) { 
        $scope.services = d; 
        ViewSpinner.stop();
    });
}]);
