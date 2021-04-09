import { dbConnector } from '../config/database-connection.js';
import { OPERATION_TYPE } from '../constants/database-operation-type.js'

//callback for the db to retrieve data
export const operate = async (sql, param, operation) => {
    const result = await dbQuery(dbConnector, sql, param, operation)

    return result;
}

const paramTypeForRetrieve = (params) => {
    if (Array.isArray(params)) {
        return [...params]
    } else if (typeof params === 'object') {
        return Object.keys(params).reduce((paramArrayForSql, key) => {
            paramArrayForSql.push(params[key])

            return paramArrayForSql
        }, [])
    } else {
        return params
    }
}

const decideTypeOfParam = (params, type) => {
    if (type === OPERATION_TYPE.RETRIEVE) {
        return paramTypeForRetrieve(params)
    } else if (type === OPERATION_TYPE.CREATE) {
        return params
    }
}

const dbQuery = (mysqlConnector, sql, param, operation) => {
    const sqlParameters = decideTypeOfParam(param, operation)

    return new Promise(data => {
        mysqlConnector.query(sql, sqlParameters, (err, result) => {
            if (err) {
                throw new Error(err)
            }

            try {
                console.log(result)

                data(result)
            } catch (e) {
                data({})

                throw new Error(e)
            }
        })
    })
}

export const checkObjectNullValue = (param) => {
    if (typeof param === 'object') {
        Object.values(param).filter(Boolean)
    }
}

