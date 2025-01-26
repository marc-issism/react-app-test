import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const userSchema = new Schema({
    userID: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    legendArray: {
        type: Array,
        required: true
    }
});

const User = model('User', userSchema);
export default User;