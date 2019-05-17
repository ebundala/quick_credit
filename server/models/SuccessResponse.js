/**
 * Created by ebundala on 5/15/2019.
 */
export default class SuccessResponse{
    constructor(data,code=200){
        this.code=code;
        this.data=data;
    }
}