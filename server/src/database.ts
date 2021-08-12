
import keys from './keys';
import mysql from 'promise-mysql';



const pool = mysql.createPool(keys.database);
pool.getConnection()
   .then(connection => {
       pool.releaseConnection(connection)
       console.log('DB Conneced');
   });

   export default pool;









