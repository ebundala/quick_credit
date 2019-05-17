import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
import SuccessResponse from "../models/SuccessResponse"

const getRepaymentHistoryOfAloan=(req,res)=>{
    let loanId=req.params.loanId;
    let userModel= new User();
    if(loanId){
       let results= userModel.getRepaymentHistory(loanId);
        res.status(200);
        res.json(new SuccessResponse(results));
    }else {
        res.status(400);
        res.json(new ErrorResponse("invalid input"))
    }
}

export default getRepaymentHistoryOfAloan;