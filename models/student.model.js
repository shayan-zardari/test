const db = require("../db");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        "name": {type: String, min: 2, max: 50},
        "date_of_birth": {type: Date},
        "interests": [],
    }
);

const student = db.model("student", studentSchema)

module.exports = student;
