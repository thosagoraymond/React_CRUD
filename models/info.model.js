const mongoose = require('mongoose');
const {Schema} = mongoose;

//Creating a schema model for contact information
const infoSchema = new Schema({
    username: {type: String},
    surname: {type: String},
    email: {type: String},
    phone: {type: String},
},{
    timestamps: {createdAt: 'createdAt'}
});

module.exports = mongoose.model('Information', infoSchema);
//Exporting the model to be available to routes