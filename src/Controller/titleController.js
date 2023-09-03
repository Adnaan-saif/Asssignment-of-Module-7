const app = require("../../app")

const Create = app.post('/', (req, res)=>{
    let data = req.body;
    res.status(201).send(`titleController created ${JSON.stringify(data)}`);
});

const Read = app.get('/', (req, res)=>{
    const getdata = req.query
    res.status(200).send(`titleController read ${JSON.stringify(getdata)}`);
});

const Update = app.put('/', (req, res)=>{
    const updateID = req.params.id;
    const updatedata = req.body
    res.status(200).send(`titleController updated ${JSON.stringify(updatedata)} of ${updateID}`);
});

const Delete = app.delete('/', (req, res)=>{
    const deleteID = req.params.id;
    res.status(200).send(`titleController deleted ${deleteID}`);
});
export {Create,Read,Update,Delete};