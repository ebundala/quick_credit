import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
import SuccessResponse from "../models/SuccessResponse"

const verifyUser=(req,res)=>{
  let userModel=  new User();
  let email=req.params.email;
  let token = req.token;
  if(email&&(token&&token.isAdmin)){
    let user=userModel.getUserByEmail(email);
      if(user&&(user.status===userModel.UNVERIFIED)){
          user.status=userModel.VERIFIED;
          let aprovedUser=userModel.patchUser(user);
          res.status(200);
          res.json(new SuccessResponse(aprovedUser));
      }else{
          res.status(400);
          res.json(new ErrorResponse("user already verified or doesn't exist"));
      }
  }else{
    res.status(400);
      res.json(new ErrorResponse("invalid email"));

  }
}

export default verifyUser;