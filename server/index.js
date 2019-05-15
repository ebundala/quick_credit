/**
 * Created by ebundala on 5/14/2019.
 */

import express from "express"
//import cors from "cors"
import apiDoc from "./routes/swagger"



const app = express();
const port = 3000;

//app.use(cors);
app.use(apiDoc);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`server listening on port ${port}`));