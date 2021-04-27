function AuthController() {

    var roles;
    var user;

    function getUser() {
      return user
    }

    function setRoles(role) {
        roles = role;
        user.roles = role;
    }

    function setUser(inUser) {
        user = inUser;
    }
    
    function isAuthorized(neededRole) {
        if (user) {
            return user.isAuthorized(neededRole);
        }
    }

    function isAuthorizedAsync(neededRole, cb) {
        setTimeout(function () { cb(roles.indexOf(neededRole) >= 0) }, 0);
    }

    function isAuthorizedPromise(neededRole, cb) {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(roles.indexOf(neededRole) >= 0) }, 0);
        });
    }

    function getIndex(req, res) {
        try {
            if (req.user.isAuthorized('admin')) {
                return res.render('index')
            }
        } catch (error) {
            return res.render('error')
        }

        res.render('notAuthorized')
    }

    return {
        isAuthorized, isAuthorizedAsync, setRoles, setUser,
        isAuthorizedPromise, getIndex, getUser
    };
}

module.exports = AuthController();
