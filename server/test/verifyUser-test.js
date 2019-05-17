/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"




//verify user

describe('tests for /users/:email/verify', () =>{
    describe('tests for patch', () =>{
        it('should respond 200 for "user verified"', () =>{
            let response = request('patch', `${baseUrl}/users/ebundala@gmail.com/verify`);
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "invalid input"', ()=> {
            let response = request('patch', `${baseUrl}/users/xxxx/verify`);

            expect(response).to.have.status(400);
            return chakram.wait();
        });

    });
});





