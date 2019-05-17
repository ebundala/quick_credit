/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"


//approve or reject loan
describe('tests for /loans/:loanId', () =>{
    describe('tests for patch', () =>{
        it('should respond 200 for "ok"', () =>{
            let response = request('patch', `${baseUrl}/loans/1`);
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "invalid input"', ()=> {
            let response = request('patch', `${baseUrl}/loans/xxx`);

            expect(response).to.have.status(400);
            return chakram.wait();
        });

    });
});
