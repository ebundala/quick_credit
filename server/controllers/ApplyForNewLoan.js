import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
//import SuccessResponse from "../models/SuccessResponse"

const applyForNewLoan=(req,res)=>{
 let userModel=new User();
 let loan=req.body;

 if(loan&&loan.user&&loan.tenor&&loan.amount&&loan.paymentInstallment){
    let verified= userModel.isUserVerified(loan.user);
    let noloan=userModel.hasNoActiveLoan(loan.user);
    if(noloan&&verified){
      let aLoan = userModel.applyForLoan(loan);
      if(aLoan.code===200) {
          res.status(200);
          res.json(aLoan);
      }

    }else{
        res.status(400);
        res.json(new ErrorResponse("user is not verified or has active loan",400))
    }
 }else{
     res.status(400);
     res.json(new ErrorResponse("invalid input",400))
 }

}

export default applyForNewLoan;