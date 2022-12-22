const middlewareFactory=(schema,property)=>{
    return (req, res, next)=>{
        const {error}=schema.validate(req[property]);
        const isValid=error===undefined;
        if(isValid){
            next();
        }
        else {
            const {details}=error;
            res.status(400).json({error:details})
        }
    }
}
module.exports={middlewareFactory}