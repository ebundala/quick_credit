/**
 * Created by ebundala on 5/14/2019.
 */
const expect    = require("chai").expect;
describe("Main test suite", function() {
    it("call a single test and pass it", function() {
        expect(1+1).to.equal(2);
    });
});