import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
//import SuccessResponse from "../models/SuccessResponse"

const signin=(req,res)=>{
    let userModel = new User();
   let credentials=req.body;
    if(credentials&&credentials.email&&credentials.password){
        let userResp=userModel.signin(credentials.email,credentials.password);
        if (userResp&&userResp.code===200){
            res.status(200);
            res.json(userResp);
        }else{
            res.status(400);
            res.json(new ErrorResponse("invalid credentials",400));
        }
    }else {
        res.status(400);
        res.json(new ErrorResponse("invalid credentials",400));
    }
}

export default signin;