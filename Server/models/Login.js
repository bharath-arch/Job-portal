import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    jobsrole: { type: String }
},
    { timestamps: true }
)

export const User = mongoose.model('User', userSchema)