import { OPERATION_TYPE } from '../../constants/database-operation-type.js'
import { TABLES } from '../../constants/tables.js'
import { operate } from '../../utils/database-operation.js'

export class UserService {
    constructor(dbConnector) {
        this.dbConnector = dbConnector
    }

    getConsultRecord = async (clinicName) => {
        const sql = `SELECT * FROM ${TABLES.CONSULTATION_RECORDS} WHERE clinicName = ?`
        const queryResult = await operate(sql, clinicName, OPERATION_TYPE.RETRIEVE)

        return queryResult
    }

    addConsultRecord = async (recordInfo) => {
        const expectedFields = ['clinic_name', 'doctor_name', 'patient-name', 'diagnosis', 'medication', 'consultation_fee', 'hasFollowUp', 'date', 'time']
        const isMissingField = Object.entries(recordInfo).filter(Boolean).length === expectedFields.length

        if (isMissingField.length > 0) {
            throw new Error(`1 or more fields are missing`)
        }


        const sql = `INSERT INTO ${TABLES.CONSULTATION_RECORDS} SET ?`
        const queryResult = operate(sql, recordInfo, OPERATION_TYPE.CREATE);

        return queryResult
    }
}