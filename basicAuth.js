function authUser (req, res, next) {
    if(req.user == null) {
        res.status(403)
        
        return res.send('You need to login first')
    }

    next()
}

function authRole (role) {
    return (req, res, next) => {
        if (role != req.user.role) {
            res.status(401)
            return res.send('UnAuthorized')
        }
        
        next();
    }
}

module.exports = {
    authUser,
    authRole
}