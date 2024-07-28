import mongoose from "mongoose";

const jobs = mongoose.Schema({

    companyName: { type: String },
    HrEmail: { type: String },
    role: { type: String },
    package: { type: Number },
    image : {type : String},
    jobstype : {type: String}


})

export const Jobs = mongoose.model('Jobs', jobs) 