import { Router } from "express";
import { dbConnection } from "../database/connection.js";

const router = Router()

router.get('/list', async (req, res) => {
    const dbPool = await dbConnection()
    const result = await dbPool.query('select * from estudiantes')
    res.json({
        data: result
    })
})
router.get('/estadistica', async (req, res) => {
    const dbPool = await dbConnection()
    const result = await dbPool.query('')
    res.json({
        status: true,
        data: result
    })
})

// router.post('/list', getListMatriculas)
// router.put('/list', getListMatriculas)
// router.delete('/list', getListMatriculas)


export default router