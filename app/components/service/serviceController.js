angular.module('dockerService', [])
.controller('ServiceController', ['$scope', '$routeParams', '$location', 'DockerService', 'Messages', 'ViewSpinner',
function($scope, $routeParams, $location, DockerService, Messages, ViewSpinner) {
    $scope.changes = {
        "extensions.scale": false
    }
    
    $scope.getChanges = function(originalData, newData) {
        if (originalData == null) {
            return;
        }
        for (var key in $scope.changes) {
            if (originalData[key] === newData[key]) {
                $scope.changes[key] == false;
            } else {
                $scope.changes[key] == true;
            }
        }
    };
    
    $scope.display = function() {
        ViewSpinner.spin();
        DockerService.get({id: $routeParams.id}, function(d) {   
            if (d.extensions.scale == null) {
                d.extensions.scale = 1;
            }       
            //$scope.getChanges($scope.service, d);
            $scope.service = d;
            
            ViewSpinner.stop();
        }, function(e) {
            if (e.status === 404) {
                $('.detail').hide();
                Messages.error("Not found", "DockerService not found.");
            } else {
                Messages.error("Failure", e.data);
            }
            ViewSpinner.stop();
        });
    };    
    
    $scope.scaleAction = function () {
        $('#scale-modal').modal('show');        
    };

    $scope.display();
}]);
