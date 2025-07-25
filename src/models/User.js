import bcrypt from "bcryptjs";
import {Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            ref: 'Role',
            type: Schema.Types.ObjectId
        },
    ],
},
{
    timestamps: true,
    versionKey: false
},
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model('User', userSchema);