/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"


//apply for new loan


describe('tests for /loans', () =>{
    describe('tests for post', () =>{
        it('should respond 200 for "ok"', () =>{
            let response = request('post', `${baseUrl}/loans`,{
                "id": 0,
                "user": "string",
                "createdOn": "string",
                "status": "pending",
                "repaid": true,
                "tenor": 0,
                "amount": 0,
                "paymentInstallment": 0,
                "balance": 0,
                "interest": 0
            });
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 404 for "invalid input"', ()=> {
            let response = request('post', `${baseUrl}/loans`,{
                "id": 0,
                "user": "string",
                "createdOn": "string",
                "status": "pending",
                "repaid": true,
                "tenor": 0,
                "amount": 0,
                "paymentInstallment": 0,
                "balance": 0,
                "interest": 0
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });

    });
});

