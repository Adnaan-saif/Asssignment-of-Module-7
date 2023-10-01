const app = require("../../app")

const Create = app.post('/', async (req, res) => {
    try {
        let createData = req.body;
        res.status(201).json({status:"success",data:createData});
    } catch (error) {
        console.error(error);
        res.status(500).json({status: "error", message: "An error occurred"});
    }
});
const Read = app.get('/', async (req, res)=>{
    try{
        const getdata = req.query
        res.status(200).json({status:"success",data:getdata});
    } catch (error){
        console.error(error);
        res.status(500).json({status: "error", message: "An error occurred"});
    }
});
const Update = app.put('/', async(req, res)=>{
    try{
        const updateID = req.params.id;
        const updatedata = req.body
        res.status(200).json({status:"success",id:updateID+"has been updated",data:updatedata});
    } catch (error){
        console.error(error);
        res.status(500).json({status: "error", message: "An error occurred"});
    }
});
const Delete = app.delete('/', async(req, res)=>{
    try{
        const deleteID = req.params.id;
        res.status(200).json({status:"succss",data:deleteID +"has been deleted"});
    } catch(error){
        console.error(error);
        res.status(500).json({status: "error", message: "An error occurred"});
    }
});
export {Create,Read,Update,Delete};