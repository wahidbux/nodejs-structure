import client from '../../../../data/db_connection.js';

const about = async (req, res) => {
    try {
        
        const {emp_name,employee_id,employee_name}=req.body;
      

        const  data=await client.query(`insert into employee (emp_name,employee_id)values('${emp_name}','${employee_id}')`);
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

export default about;
