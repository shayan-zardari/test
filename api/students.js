const student = require("../models/student.model");
const router = require("express").Router();

router.get('/', async function(req,res) {
    try {
        const students = await student.find();
        console.log("hello");
        return res.json(students);
    }
    catch (ex) {
        return res.send(ex.message);
    }   
});

router.get('/:id', async function(req,res) {
    try {
        const {id} = req.params;
        console.log(req.query);
        const students = await student.findById(id);
        return res.json(students);
    }
    catch (ex) {
        return res.send(ex.message);
    }   
});

router.post('/', async function(req, res) {
    try {
        const shayan = new student({
            "name": "shayan",
            "date_of_birth": new Date(),
        });
        // await shayan.save();
        console.log(req.body);
        return res.json(shayan);
    }
    catch(er) {
        console.log(er);
        return res.status(500).json({
           "message": "error" 
        });
    }
});

router.delete('/:id', async function(req, res) {
    try {
        const {id} = req.params;
        console.log(req.query);
        await student.deleteOne({_id:id});
        return res.json({
            "message": "record with id: "+id+" deleted"
        });
    }
    catch (ex) {
        return res.send(ex.message);
    }  
});
module.exports = router;