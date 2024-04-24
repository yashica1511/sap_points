const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Student = require('./models/student');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json)

mongoose.connect('mongodb://127.0.01:27017/SAP_POINTS', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/api/user', async (req, res) => {
    const { email } = req.query;

    try {
        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});