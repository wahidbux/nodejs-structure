import client from '../../../../data/db_connection.js';

const select = async (req, res,err) => {
    const {rows}=await client.query('SELECT * FROM students');
   if(err){
    return res.status(200).json({ message: 'success',data:rows});
   }else{
    return res.status(200).json({massage:"failed",data:rows});
   }
}

export default select;
