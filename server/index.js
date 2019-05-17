/**
 * Created by ebundala on 5/14/2019.
 */

import express from "express"
import cors from "cors"
import apiDoc from "./routes/swagger"
import routes from "./routes/routes"
import ErrorResponse from "./models/ErrorResponse"
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT||80;

app.use(cors());
app.use(bodyParser.json());
app.use(apiDoc);
app.use(routes);
app.get('/', (req, res) => res.send('your here'));
app.all("*",(req,res)=>{ res.status=404; res.json(JSON.stringify(new ErrorResponse("404 not found")))})
app.listen(port, () => console.log(`server listening on port ${port}`));