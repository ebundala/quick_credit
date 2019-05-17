/**
 * Created by ebundala on 5/15/2019.
 */
import jwt from "jsonwebtoken"
import {secretKey} from "../config/config"
import ErrorResponse from "../models/ErrorResponse"
const auth = (req,res,next)=>{
    if(req.headers.authorization){
    let authorization = req.headers.authorization.split(" ");
    delete req.headers.authorization;

    if (authorization.length === 2) {
        let token = authorization[1];

        jwt.verify(token, secretKey, function(err, decoded) {
            if(err){
                res.status(401);
                res.json(JSON.stringify(new ErrorResponse("unauthorized",401)));
            }else {
                req.token = decoded;
                next()
            }
        });
    }
    }
    next()

}

export default auth;