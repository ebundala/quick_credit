/**
 * Created by ebundala on 5/15/2019.
 */
import DB from "../db/db";
import jwt from "jsonwebtoken"
import {secretKey} from "../config/config"
import ErrorResponse from "./ErrorResponse";
import SuccessResponse from "./SuccessResponse";

export default class  User{
    constructor(){
        this.db= new DB();
        this.VERIFIED="verified";
        this.UNVERIFIED="unverified";
        this.APPROVED="approved";
        this.REJECTED="rejected";
        this.PENDING="pending";
    }
    getUserByEmail(email){
      return this.db.getByIndex(this.db.USERS,this.db.USERS_INDEX,email)
    }
    getUserById(id){
       return this.db.fetch(this.db.USERS,id)
    }
    getLoanById(loanId){
        return this.db.fetch(this.db.LOANS,loanId)
    }
    updateLoan(loanId,state){
        let loan=this.getLoanById(loanId);
        if(loan) {
            if (state === this.APPROVED) {
                loan["status"] = this.APPROVED;
            }
            else if (state === this.REJECTED) {
                loan["status"] = this.REJECTED;
            }

          return  this.db.update(this.db.LOANS,loan,"loanId")
        }
       return null;
    }
    getLoansByStatus(status,repaid=false){
        return this.db.getAllByFieldValue(this.db.LOANS,"status",status,"repaid",repaid)
    }
    getAllLoans(){
       return this.db.all(this.db.LOANS)
    }
    patchUser(user){
        return this.db.update(this.db.USERS,user);
    }
    isUserVerified(email){
        let user=this.db.getByIndex(this.db.USERS,this.db.USERS_INDEX,email);
        if(user){
        return user.status===this.VERIFIED
        }
        return false;
    }
    hasNoActiveLoan(email){
       // let user=this.db.getByIndex(this.db.USERS,this.db.USERS_INDEX,email)
        let activeLoans=this.db.getAllByFieldValue(this.db.LOANS,"repaid",false,"user",email);

        if(activeLoans)
        return !activeLoans.length;
        else
        return true
    }
    signup(user){
        let _user=this.db.getByIndex(this.db.USERS,this.db.USERS_INDEX,user.email);
        if(!_user)
            return this.db.insert(this.db.USERS, user);

    }
    signin(email,password){
        let user=this.db.getByIndex(this.db.USERS,this.db.USERS_INDEX,email);
        if(user){
          if(user.password===password){

              let token = jwt.sign(user, secretKey);
             let aUser={...user,"token":token};
             console.log(global._storage);
             return new SuccessResponse(aUser)
          }
            return new ErrorResponse("wrong password/email combination");
        }
        return new ErrorResponse("no user found");
    }
    getMyloans(){
        return this.db.getAllByFieldValue(this.db.LOANS,"email",this.email,"repaid",false);
    }
    applyForLoan(application){
        let loanId=this.db.insert(this.db.LOANS,application,"loanId");
        let aloan = this.db.fetch(this.db.LOANS,loanId);
        if(aloan&&aloan.user){
            let user = this.getUserByEmail(aloan.user);
            if(user){
                return new SuccessResponse({...user,...aloan})
            }
        }
        return new ErrorResponse("invalid data");


    }
    repayLoan(repayment){
       return this.db.insert(this.db.REPAYMENTS,repayment)
    }
    getRepaymentHistory(loanId){
     return this.db.getAllByFieldValue(this.db.REPAYMENTS,"loanId",loanId)
    }
}







