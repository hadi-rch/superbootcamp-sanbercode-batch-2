import express from 'express';
import {router} from './src/routes/main';
import dotenv from 'dotenv';
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./src/docs/swagger-api-docs.json');
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/docs/swagger-api-docs.json';



dotenv.config();
const app = express();
const port = 8080

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", router)


app.listen(port,() => {
console.log(`listening on port ${port}`);
});