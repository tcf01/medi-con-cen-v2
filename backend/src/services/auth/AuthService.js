import { OPERATION_TYPE } from '../../constants/database-operation-type.js'
import { TABLES } from '../../constants/tables.js'
import { operate } from '../../utils/database-operation.js'

export class AuthService {
    constructor(dbConnector) {
        this.dbConnector = dbConnector
    }

    getUserByEmail = (email) => {
        const sql = `SELECT * FROM ${TABLES.USERS} WHERE email = ?`
        const queryResult = operate(sql, email, OPERATION_TYPE.RETRIEVE)

        return queryResult
    }

    getUserByUsername = (username) => {
        const sql = `SELECT * FROM ${TABLES.USERS} WHERE username = ?`
        const queryResult = operate(sql, username, OPERATION_TYPE.RETRIEVE)

        return queryResult
    }

    authenticateEmailAndPw = async (loginInfo) => {
        const sql = `SELECT * FROM ${TABLES.USERS} WHERE email = ? AND password = ? `
        const queryResult = operate(sql, loginInfo, OPERATION_TYPE.RETRIEVE)

        return queryResult
    }

    addUser = async (userInfo) => {
        const expectedFields = ['email', 'password', 'clinic-name', 'phone', 'address']
        const insertUserSql = `INSERT INTO ${TABLES.USERS} SET ?`


        const isMissingField = Object.entries(userInfo).filter(Boolean).length === expectedFields.length
        const userEmailExists = await this.getUserByEmail(userInfo.email)


        if (userEmailExists.length > 0) {
            throw new Error("Email already exists!")
        } else if (isMissingField.length > 0) {
            throw new Error(`1 or more fields are missing`)
        }


        const queryResult = operate(insertUserSql, userInfo, OPERATION_TYPE.CREATE)

        return queryResult
    }
}