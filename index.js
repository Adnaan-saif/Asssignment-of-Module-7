const app = require('./app');
const router = require('./src/Routes');
const port = require('./config.env') || process.env.RUNNING_PORT || 8080;

app.use(router);
app.listen(port, () => {
    console.log("Server is running");
})