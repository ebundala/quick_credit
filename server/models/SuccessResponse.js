/**
 * Created by ebundala on 5/15/2019.
 */
export default class SuccessResponse{
    constructor(msg){
        this.code=200;
        this.error=msg;
    }
}