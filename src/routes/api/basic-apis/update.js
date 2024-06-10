import client from '../../../../data/db_connection.js';
const update = async (req, res ,err) => {
    
    const {student_name}=req.body
    const {rows}=await client.query(`UPDATE students SET student_name='Sattar' WHERE student_name='${student_name}'`);
    if(err){
    return res.status(200).json({ message: 'success',data:rows});
    }
    else{
        return res.status(200).json({ message: 'Failed',data:rows});
    }
}
export default update;
