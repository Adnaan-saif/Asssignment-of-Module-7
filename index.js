const app = require('./app');
const router = require('./src/Routes');
const port = require('./config.env') || 5500;

app.use(router);
app.listen(port, () => {
    console.log("Server is running");
})