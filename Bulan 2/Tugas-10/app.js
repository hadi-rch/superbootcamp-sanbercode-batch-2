import express from 'express';
import {router} from './src/routes/main';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 8080

app.use(express.json())
app.use("/", router)


app.listen(port,() => {
console.log(`listening on port ${port}`);
});