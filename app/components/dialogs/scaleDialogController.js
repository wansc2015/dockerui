angular.module('dockerui.dialogs', [])
.controller('ScaleDialogController', ['$scope', '$routeParams', 'DockerService', 'Messages',
function($scope, $routeParams, DockerService, Messages) {
    $scope.template = 'app/components/dialogs/scaleDialog.html';
    $scope.scaleConfig = {
        type: "scale_out",
        number: 1
    };
    $scope.scale = function(id) {
        var config = {
            "value": parseInt($scope.scaleConfig.number),
            "id": $routeParams.id,
            "type": $scope.scaleConfig.type
        };
        DockerService.scale(config, function(d) {
            $('#scale-modal').modal('hide');
            $scope.display();
        }, function(e) {
            failedRequestHandler(e, Messages);
        });
    };
    
}]);
