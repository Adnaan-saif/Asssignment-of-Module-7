const app = require('./app');
const router = require('./src/Routes');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

app.use(router);
app.listen(process.env.RUNNING_PORT, () => {
    console.log("Server is running");
});