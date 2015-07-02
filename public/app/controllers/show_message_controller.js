FoorumApp.controller('ShowMessageController', function ($scope, $routeParams, Api, $route) {
    // Toteuta kontrolleri tähän

    Api.getMessage($routeParams.id).success(function (message) {
        $scope.message = message;
    });


    $scope.addReply = function () {
        if ($scope.newReply.content !== "") {

            Api.addReply({
                content: $scope.newReply.content
            }, $scope.message.id).success(function (reply) {
                $route.reload();
            });

        }
    }


});
