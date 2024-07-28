import express from 'express'
import { Jobs } from '../models/JobsTable.js'

const router = express()


router.post('/', async (req, res) => {
    console.log("object")

    const { companyName,
        HrEmail,
        image,
        role,
        Package,
        jobtype,
        jobsrole } = req.body
    const newJobEntry = new Jobs({ ...req.body })
    await newJobEntry.save()

    return res.status(200).json({ message: 'added' })
})

router.get('/getJobData', async (req, res) => {
    const jobsData = await Jobs.find()
    console.log(jobsData)
    return res.status(200).json({ message: jobsData })
})

export default router