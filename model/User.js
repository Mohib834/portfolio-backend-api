const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: 'String',
        required: true,
        validate(val) {
            if (!validator.isEmail(val)) throw new Error('Not a valid email address !')
        }
    },
    message: {
        type: 'String',
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;