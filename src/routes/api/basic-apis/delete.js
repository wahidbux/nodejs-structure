
import client from '../../../../data/db_connection.js';

const _delete = async (req, res,err) => {

    const {rows}=await client.query('delete from students where student_id=101');
   
    if(err){
        return res.status(200).json({ message: 'success',data:rows});
        }else{
            return res.status(200).json({ message: 'failed',data:rows});
        }
}
export default _delete;
