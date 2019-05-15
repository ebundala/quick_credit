/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"

//signup
describe('tests for signup', () =>{
    describe('tests for post ', () =>{
        it('should respond 200 for "signup success"', () =>{
            let response = request('post', `${baseUrl}/auth/signup`, {
                "id": null,
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "address": "string",
                "isAdmin": false,
                "status": "unverified"
            });
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "invalid input"', ()=> {
            let response = request('post', `${baseUrl}/auth/signup`,
                {
                    "id": 0,
                    "firstName": "string",
                    "lastName": "string",
                    "email": "string",
                    "password": "string",
                    "address": "string",
                    "isAdmin": false,
                    "status": "unverified"
                }
            );

            expect(response).to.have.status(400);
            return chakram.wait();
        });

    });
});
