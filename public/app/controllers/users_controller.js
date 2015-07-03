FoorumApp.controller('UsersController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän

    $scope.login = function () {
        Api.login({username: $scope.username, password: $scope.password})
                .success(function (user) {
//                    alert('Kirjautuminen onnistui!');
                    $location.path("/");
                })
                .error(function () {
//                    alert('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                    $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
                });
    }
    $scope.register = function () {
        if ($scope.password !== "" && $scope.password_confirmation !== "" && $scope.username !== "") {

            if ($scope.password === $scope.password_confirmation) {
                Api.register({username: $scope.username, password: $scope.password})
                        .success(function (user) {
//                            alert('Luominen onnistui!');
                            $location.path("/");
                        })
                        .error(function () {
//                            alert('Käyttäjätunnus jo olemassa');
                            $scope.errorMessage = 'Käyttäjätunnus on jo käytössä!';
                        });
            }

        }
    }
});
