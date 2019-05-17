import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
//import SuccessResponse from "../models/SuccessResponse"

const postArepaymentOfAloan=(req,res)=>{
    let token=req.token;
   let userModel=new User();
   let payment=req.body;
   if(payment){
      let results=userModel.repayLoan(payment,token);
       if(results.code==200){
           res.status(200);
       }else{
           res.status(400);
       }
       res.json(results)

   }else{
       res.status(200);
       res.json(new ErrorResponse("invalid input"))
   }

}

export default postArepaymentOfAloan;