import User from "../models/User"
import ErrorResponse from "../models/ErrorResponse"
import SuccessResponse from "../models/SuccessResponse"

const getSpecificLoan=(req,res)=>{
    let userModel=new User();
    let loanId=req.params.loanId;
    if(loanId){
        let loan=userModel.getLoanById(loanId);
        if(loan){
            res.status(200)
            res.json(new SuccessResponse(loan))
        }else{
            res.status(404)
            res.json(new ErrorResponse("not found",404))
        }
    }
    else{
        res.status(400)
        res.json(new ErrorResponse("invalid input",400))
    }
}

export default getSpecificLoan;