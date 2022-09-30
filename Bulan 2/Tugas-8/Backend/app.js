import express from 'express';
import {router} from './src/routes/main';
import cors from 'cors'


const app = express();
const port = 8080

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json())
app.use("/", router)


app.listen(port,() => {
console.log(`listening on port ${port}`);
});