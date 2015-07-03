//var authentication = function(req, res, next){
//  // Tarkista, että käyttäjä on kirjautunut tässä
//}

var authentication = function (req, res, next) {
    if (!req.session.userId || req.session.userId == null) {
        res.send(403);
    } else {
        next();
    }
}

module.exports = authentication;
//{ username: 'T', password: 'T' }