FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    // Toteuta kontrolleri tähän
    
    $scope.newMessage = {title: "", content: ""}

    Api.getTopic($routeParams.id).success(function (topic) {
//        alert($routeParams.id + " oli tämä id");
        $scope.topic = topic;
    });

    $scope.addMessage = function () {
        if ($scope.newMessage.title !== "" && $scope.newMessage.content !== "") {

            Api.addMessage({
                title: $scope.newMessage.title,
                content: $scope.newMessage.content
            }, $scope.topic.id).success(function (message) {
                $scope.message = message;
                $location.path('/messages/' + $scope.message.id);
            });

        }
    }

});
