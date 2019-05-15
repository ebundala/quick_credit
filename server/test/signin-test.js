/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"

//signin
describe('tests for signin', () =>{
    describe('tests for post ', () =>{
        it('should respond 200 for "login success"', () =>{
            let response = request('post', `${baseUrl}/auth/signin`, {
                "password": "string",
                "email": "string"
            });
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "failed to login"', ()=> {
            let response = request('post', `${baseUrl}/auth/signin`, {
                "password": "",
                "email": ""
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });

    });
});
