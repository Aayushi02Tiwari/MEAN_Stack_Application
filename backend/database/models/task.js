const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roleType:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
    },
    // completed: {
    //     type: Boolean,
    //     default: true
    // }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task