import { query } from 'express';
import client from '../../../../data/db_connection.js';
const insert = async (req, res) => {
    try{
    const {id,name,age}=req.body
    const {data}=await client.query(`insert into students (id,name,age)values('${id}','${name}','${age}')`);
    
    const {rowCount,rows}=data
 

    if(rowCount>0){
    return res.status(200).json({ message: 'success',data:rows });
    }else{
        return res.status(400).json({ message: 'Failed',data:null });
    }    

} catch (error) {
 console.log(error);  
 return res.status(400).json({ message: 'Failed',data:null });
  
}
    
}
export default insert;
