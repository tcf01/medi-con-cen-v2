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

            if (queryResult.length > 0) {
                res.json({ data: queryResult })
            } else {
                res.json({ msg: "No Record" })
            }
        } catch (e) {
            console.log(e)

            res.json({ msg: e.toString() })
        }
    }

    addConsultRecord = async (req, res) => {
        try {
            const { recordInfo } = req.body
            const queryResult = await this.userService.addConsultRecord(recordInfo)

            res.json({ data: queryResult })
        } catch (error) {
            console.log(error)

            res.json({ msg: error.message })
        }
    }
}