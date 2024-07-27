import express from 'express'
import { User } from '../models/Login.js'

const router = express()



router.post('/', async (req, res) => {

    const email = req.body.email
    const isMatch = await User.findOne({ email: email })
    if (isMatch) {
        return res.status(200).json({ message: 'User Found' })

    }
    else {

        const user = new User({ ...req.body })
        await user.save()
        return res.status(200).json({ message: 'User created' })
    }
})

router.post('/login', async (req, res) => {

    const email = req.body.email
    const isMatch = await User.findOne({ email: email })
    if (isMatch) {
        return res.status(200).json({ message: 'User Found' })

    }
    else{
        return res.status(200).json({ message: 'Please register' })
 
    }
})

export default router