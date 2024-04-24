const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    year: { type: String, required: true },
    department: { type: String, required: true },
    section: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;