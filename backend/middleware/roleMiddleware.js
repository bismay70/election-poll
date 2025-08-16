const role = (...roles) => {
    return (req,res,next) => {
        if(!req.user || !roles.includes(req.user.role)){
            res.status(403).json({message: "Access Denied."});
        }
        next();
    }
}

module.exports = {role};