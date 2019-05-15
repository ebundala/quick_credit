/**
 * Created by ebundala on 5/15/2019.
 */
/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"





//post a repayment of a loan

describe('tests for /loans/:loanId/repayments', () =>{
    describe('tests for post', () =>{
        it('should respond 200 for "ok"', () =>{
            let response = request('post', `${baseUrl}/loans/1/repayments`,{
                "id": 0,
                "createdOn": "string",
                "loanId": 0,
                "amount": 0
            });
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 404 for "invalid input"', ()=> {
            let response = request('post', `${baseUrl}/loans/x/repayments`,{
                "id": 0,
                "createdOn": "string",
                "loanId": 0,
                "amount": 0
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });

    });
});