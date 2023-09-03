const app = require('./app');
const router = require('./src/Routes');
const port = process.env.PORT || 3000;

app.use(router);
app.listen(port, ()=>{
    console.log("Server is running");
})