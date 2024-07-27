import mongoose from 'mongoose'

const login = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    type: { type: String }
})