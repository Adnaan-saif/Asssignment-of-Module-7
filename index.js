const app = require('./app');
const router = require('./src/Routes');
const port = process.env.RUNNING_PORT || 5500;

app.use(router);
app.listen(port, () => {
    console.log("Server is running");
})