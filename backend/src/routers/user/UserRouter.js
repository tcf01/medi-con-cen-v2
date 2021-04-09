import express from 'express';

export class UserRouter {
    constructor(userService) {
        this.userService = userService
    }

    router() {
        const router = express.Router()

        router.get('/record', this.getConsultRecord)
        router.post('/record', this.addConsultRecord)

        return router;
    }

    getConsultRecord = async (req, res) => {
        try {
            const { clinicName } = req.query;
            const queryResult = await this.userService.getConsultRecord(clinicName)

            res.status(200).json({ data: queryResult })
        } catch (e) {
            console.log(e)

            res.status(500).json({ msg: e.toString() })
        }
    }

    addConsultRecord = async (req, res) => {
        try {
            const { recordInfo } = req.body
            const queryResult = await this.userService.addConsultRecord(recordInfo)

            res.status(200).json({ data: queryResult })
        } catch (error) {
            console.log(error)

            res.status(500).json(error.message)
        }
    }
}