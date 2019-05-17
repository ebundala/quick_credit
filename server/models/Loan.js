/**
 * Created by ebundala on 5/15/2019.
 */
export default class Loan {
    constructor(id, user, status, amount, repaid, tenor, paymentInstallment, balance, interest) {
        this.id = id;
        this.createdOn = Date.now();
        this.user = user;
        this.status = status;
        this.amount = amount;
        this.repaid = repaid;
        this.tenor = tenor;
        this.paymentInstallment = paymentInstallment;
        this.balance = balance;
        this.interest = interest;

    }
}
