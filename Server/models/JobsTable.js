import mongoose from "mongoose";

const jobs = mongoose.Schema({

    companyName: { type: String },
    HrEmail: { type: String },
    image: { type: String },
    role: { type: String },
    Package: { type: Number },
    jobtype: { type: String },
    jobsrole: { type: String }

})

export const Jobs = mongoose.model('Jobs', jobs) 