/**
 * Created by ebundala on 5/14/2019.
 */

import express from "express"
//import cors from "cors"
import apiDoc from "./routes/swagger"
import routes from "./routes/routes"


const app = express();
const port = process.env.PORT||80;

//app.use(cors);
app.use(apiDoc);
app.use(routes)
app.get('/', (req, res) => res.send('your here'));

app.listen(port, () => console.log(`server listening on port ${port}`));