import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
import SuccessResponse from "../models/SuccessResponse"

const signUp=(req,res)=>{
     let userModel = new User();
     let user=req.body;
     if(user&&user.email&&user.password&&user.address&&user.firstName&&user.lastName) {
         let aUser = userModel.signup(user);
         if (aUser)
         {
             let dbuser = userModel.signin(user.email, user.password);
         if (dbuser.status === 200) {
             res.status(200);
             res.json(new SuccessResponse(dbuser, 200))
         }
         else {
             res.status(400);
             res.json(dbuser);
         }
     }
         res.status(400);
         res.json(new ErrorResponse("failed to signup ", 400))
     }
     else {
         res.status(400);
         res.json(new ErrorResponse("invalid input", 400))

     }
}

export default signUp;