FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    // Toteuta kontrolleri tähän

    Api.getTopic($routeParams.id).success(function (topic) {
//        alert($routeParams.id + " oli tämä id");
        $scope.topic = topic;
    });

});
