const mongoose = require('mongoose');

const formSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
       number: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        
    },
    {
        timestamps:true
    }
)

const Formdata = mongoose.model('Formdata', formSchema )
module.exports =  Formdata;
    
