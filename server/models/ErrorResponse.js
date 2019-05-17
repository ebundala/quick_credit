/**
 * Created by ebundala on 5/15/2019.
 */

export default class ErrorResponse{
    constructor(msg,code=400){
        this.code=code;
        this.error=msg;
    }
}