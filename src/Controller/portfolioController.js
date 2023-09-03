const app = require("../../app")

const Create = app.post('/', (req, res)=>{
    let data = req.body;
    res.status(201).send(`portfolioController created ${JSON.stringify(data)}`);
});

const Read = app.get('/', (req, res)=>{
    const getdata = req.query
    res.status(200).send(`portfolioController read ${JSON.stringify(getdata)}`);
});

const Update = app.put('/', (req, res)=>{
    const updateID = req.params.id;
    const updatedata = req.body
    res.status(200).send(`portfolioController updated ${JSON.stringify(updatedata)} of ${updateID}`);
});

const Delete = app.delete('/', (req, res)=>{
    const deleteID = req.params.id;
    res.status(200).send(`portfolioController deleted ${deleteID}`);
});
export {Create,Read,Update,Delete};