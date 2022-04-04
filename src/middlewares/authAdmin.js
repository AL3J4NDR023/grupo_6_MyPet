function authAdmin(req, res, next) {
    if (req.session.userLogin){
	    if (req.session.userLogin.idRol ==2) {
		    next();
         }else{
            return res.redirect('/');
         }
    }else{
        return res.redirect('/user/login');
    }
    	
}

module.exports = authAdmin;