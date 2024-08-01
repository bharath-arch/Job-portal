import express from 'express'
import { Jobs } from '../models/JobsTable.js'
const router = express()



router.delete('/:id', async (req, res) => {
    //get querry
    // const jobID = req.query.id
    const jobID = req.params.id
    await Jobs.findOneAndDelete({ _id: jobID })
    return res.status(200).json({ message: "Sucess" })
})




export default router