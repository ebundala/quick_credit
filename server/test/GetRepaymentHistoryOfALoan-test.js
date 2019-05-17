/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"

//get repayment history of a loan
describe('tests for /loans/:loanId/repayments', () =>{
    describe('tests for get', () =>{
        it('should respond 200 for "ok"', () =>{
            let response = request('get', `${baseUrl}/loans/1/repayments`,);
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "invalid input"', ()=> {
            let response = request('get', `${baseUrl}/loans/x/repayments`);

            expect(response).to.have.status(400);
            return chakram.wait();
        });

    });
});