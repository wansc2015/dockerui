angular.module('dockerui', ['dockerui.templates', 'ngRoute', 'dockerui.services', 'dockerui.filters', 'masthead', 'footer', 'dashboard', 
'container', 'containers', 'dockerServices', 'dockerService', 'images', 'image', 'hosts', 'startContainer', 'sidebar', 'info', 
'builder', 'containerLogs', 'dockerui.dialogs'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.when('/', {templateUrl: 'app/components/dashboard/dashboard.html', controller: 'DashboardController'});
        $routeProvider.when('/containers/', {templateUrl: 'app/components/containers/containers.html', controller: 'ContainersController'});
        $routeProvider.when('/containers/:id/', {templateUrl: 'app/components/container/container.html', controller: 'ContainerController'});
        $routeProvider.when('/containers/:id/logs/', {templateUrl: 'app/components/containerLogs/containerlogs.html', controller: 'ContainerLogsController'});
        $routeProvider.when('/images/', {templateUrl: 'app/components/images/images.html', controller: 'ImagesController'});
        $routeProvider.when('/hosts/', {templateUrl: 'app/components/hosts/hosts.html', controller: 'HostsController'});
        $routeProvider.when('/services/', {templateUrl: 'app/components/services/services.html', controller: 'ServicesController'});
        $routeProvider.when('/services/:id/', {templateUrl: 'app/components/service/service.html', controller: 'ServiceController'});
        $routeProvider.when('/images/:id*/', {templateUrl: 'app/components/image/image.html', controller: 'ImageController'});
        $routeProvider.when('/info', {templateUrl: 'app/components/info/info.html', controller: 'InfoController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }])
    // This is your docker url that the api will use to make requests
    // You need to set this to the api endpoint without the port i.e. http://192.168.1.9
    .constant('DOCKER_ENDPOINT', 'dockerapi')
    .constant('DOCKER_PORT', '') // Docker port, leave as an empty string if no port is requred.  If you have a port, prefix it with a ':' i.e. :4243
    .constant('UI_VERSION', 'v0.6.0')
    .constant('DOCKER_API_VERSION', 'v1.17');
