function userLoggedAll(req, res, next) {
	res.locals.userLoggedAll=false;

    if(req.session.userLogin){
        res.locals.userLoggedAll=true;
        res.locals.userLogin=req.session.userLogin;
    }
	next();
}

module.exports = userLoggedAll;