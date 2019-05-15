/**
 * Created by ebundala on 5/15/2019.
 */
import chakram from 'chakram';
let request = chakram.request;
let expect = chakram.expect;
import {baseUrl} from "../config/config"

//get loans by status
describe('tests for /loans', () =>{
    describe('tests for get', () =>{
        it('should respond 200 for "ok"', () =>{
            let response = request('get', `${baseUrl}/loans`);
            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 404 for "invalid input"', ()=> {
            let response = request('get', `${baseUrl}/loans`);

            expect(response).to.have.status(404);
            return chakram.wait();
        });

    });
});
