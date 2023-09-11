const app = require("../../app")

const Create = app.post('/', (req, res)=>{
    let data = req.body;
    res.status(201).json({status:"success",data:data});
});

const Read = app.get('/', (req, res)=>{
    const getdata = req.query
    res.status(200).json({status:"success",data:getdata});
});

const Update = app.put('/', (req, res)=>{
    const updateID = req.params.id;
    const updatedata = req.body
    res.status(200).json({status:"success",id:updateID+"has been updated",data:updatedata});
});

const Delete = app.delete('/', (req, res)=>{
    const deleteID = req.params.id;
    res.status(200).json({status:"succss",data:deleteID +"has been deleted"});
});
export {Create,Read,Update,Delete};