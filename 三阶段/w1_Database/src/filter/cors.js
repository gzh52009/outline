const allowOrigin = ['http://localhost:8080','http://localhost:10086']
module.exports = (req,res,next)=>{
    // cors
    // res.header('Access-Control-Allow-Origin','*');
    // res.header('Access-Control-Allow-Methods','*');
    // res.header('Access-Control-Allow-Headers','*');
    const origin  = req.get('Origin');
    console.log('origin=',origin);
    if(allowOrigin.includes(origin)){
        res.set({
            'Access-Control-Allow-Origin':origin,
            'Access-Control-Allow-Methods':'PUT,POST,GET,PATCH,DELETE,OPTIONS',
            'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept,X-Requested-With',
        })

        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            next();
        }
    }else{
        next()
    }
}