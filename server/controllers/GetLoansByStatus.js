import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
import SuccessResponse from "../models/SuccessResponse"

const getLoanByStatus=(req,res)=>{
    let userModel=new User();
    let {repaid,status}=req.query;
    let result;
    if(status===userModel.PENDING){
        //get all loans applications
        result = userModel.getLoansByStatus(userModel.PENDING)

    }else if (repaid&&status===userModel.APPROVED){
        //get all repaid loans status=approved&repaid=true
        result = userModel.getLoansByStatus(userModel.APPROVED,true)
    }
    else if(repaid===false&&status===userModel.APPROVED){
        //get loans not fully paid
        result = userModel.getLoansByStatus(userModel.APPROVED,false)
    }
    else {
        //get all loans
        result = userModel.getAllLoans();
    }
    if(result){
        res.status(404);
        res.json(new SuccessResponse(result,200))
    }else {
        res.status(404);
        res.json(new ErrorResponse("not found",404))
    }

}

export default getLoanByStatus;