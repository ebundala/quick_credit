/**
 * Created by ebundala on 5/15/2019.
 */
export  const ENV=process.env.ENV||"DEVELOPMENT";
export const baseUrl= ENV!=="DEVELOPMENT"?"https://peaceful-stream-51240.herokuapp.com/api/v1":"http://localhost/api/v1";
export const secretKey="11111232334454546iojdfsmmssnsm";