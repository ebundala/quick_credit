import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
import SuccessResponse from "../models/SuccessResponse"


const approveOrRejectLoan=(req,res)=>{
    //let token=req.token;
    let userModel=new User();
    let loanId=req.params.loanId;
    let {state}=req.body;
    if(loanId&&state){
        let loan=userModel.updateLoan(loanId,state);
        if(loan){
            let result={loanAmount:loan.amount,...loan};
            res.status(200);
            res.json(new SuccessResponse(result));
        }else{
            res.status(400);
            res.json(new ErrorResponse("invalid input"));
        }
    }else{
        res.status(404);
        res.json(new ErrorResponse("not founds"));
    }

}

export default approveOrRejectLoan;