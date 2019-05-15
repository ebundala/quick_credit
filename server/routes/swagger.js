/**
 * Created by ebundala on 5/15/2019.
 */
import Express from "express"
import swaggerUi from "swagger-ui-express"
import apiSpec from '../openapi.json';

const router = Express.Router();
router.use('/api/v1/api-docs', swaggerUi.serve);
router.get('/api/v1/api-docs', swaggerUi.setup(apiSpec));

export default  router;