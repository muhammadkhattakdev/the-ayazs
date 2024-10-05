const mongoose = require("mongoose");


const WorkSchema = new mongoose.Schema({
    logo : {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Work', WorkSchema);

module.exports = model;



