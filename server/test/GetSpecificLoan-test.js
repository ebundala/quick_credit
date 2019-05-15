
/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"

// get specific loan

describe('tests for /loans/:loanId', () =>{
    describe('tests for get', () =>{
        it('should respond 200 for "ok"', () =>{
            let response = request('get', `${baseUrl}/loans/1`);
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 404 for "invalid input"', ()=> {
            let response = request('get', `${baseUrl}/loans/xxx`);
            expect(response).to.have.status(404);
            return chakram.wait();
        });

    });
});