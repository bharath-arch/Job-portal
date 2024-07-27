import express from 'express'

const router = express()



router.post('/', async (req, res) => {
    const email = req.body.email
    console.log(email)
})

export default router