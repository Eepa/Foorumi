FoorumApp.controller('TopicsListController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän

    $scope.newTopic = {name: "", description: ""}

    Api.getTopics().success(function (topics) {
        $scope.topics = topics;
//        alert(JSON.stringify($scope.topics));
    });

    $scope.addTopic = function () {
        if ($scope.newTopic.name !== "" && $scope.newTopic.description !== "") {

            Api.addTopic({
                name: $scope.newTopic.name,
                description: $scope.newTopic.description
            }).success(function (topic) {
                $scope.topic = topic;
                $location.path('/topics/' + $scope.topic.id);
            });

        }
    }

});
