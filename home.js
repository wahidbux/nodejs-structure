import client from '../../../../data/db_connection.js';

const home = async (req, res) => {
    const {rowCount,rows}=await client.query('SELECT * FROM employee');
   
    return res.status(200).json({ message: 'success',data:rows});

}

export default home;
