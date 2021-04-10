import mysql from 'mysql';

//Demo only, the following info should be put in .env
const dbInfo = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'medi-con-cen',
}


export const dbConnector = mysql.createConnection(dbInfo)
export const initDb = () => dbConnector.connect(err => {
    if (err) {
        console.log(err);
        throw err
    };

    console.log(`database ${dbInfo.database} has been connected`);
})
export const closeConnection = dbConnector.end;
