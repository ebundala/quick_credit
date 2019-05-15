/**
 * Created by ebundala on 5/15/2019.
 */

export default class ErrorResponse{
    constructor(msg){
        this.code=404;
        this.error=msg;
    }
}