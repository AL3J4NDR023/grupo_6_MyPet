const User = require('../models/User')

function userLoggedAll(req, res, next) {
	res.locals.userLoggedAll=false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    if(userFromCookie){
        req.session.userLogin = userFromCookie;
    }

    if(req.session.userLogin){
        res.locals.userLoggedAll=true;
        res.locals.userLogin=req.session.userLogin;
    }


    //console.log(userFromCookie);

	next();
}

module.exports = userLoggedAll;