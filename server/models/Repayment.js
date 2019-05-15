/**
 * Created by ebundala on 5/15/2019.
 */

export default class Repayment{
    constructor(id,createdOn,loanId,amount){
        this.id=id;
        this.createdOn=createdOn;
        this.loanId=loanId;
        this.amount=amount;
    }
}