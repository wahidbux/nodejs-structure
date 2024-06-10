
import client from '../../../../data/db_connection.js';
const insert = async (req, res,err) => {
    
    const {student_id,student_name,student_age}=req.body
    const {rows}=await client.query(`insert into students (student_id,student_name,student_age)
    values('${student_id}','${student_name}','${student_age}')`);
    
    if(err){
    return res.status(200).json({ message: 'success',data:rows});
    }else{
        return res.status(200).json({ message: 'failed',data:rows});
    }
}
export default insert;


