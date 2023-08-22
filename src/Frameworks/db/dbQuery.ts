import mysql, { Connection } from 'mysql2'
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    database: 'bancodenoticias',
    password: ''
})

 const d : { db: Connection} = {db: connection};
export default d;
