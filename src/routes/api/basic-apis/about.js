import client from '../../../../data/db_connection.js';

const about = async (req, res) => {
    
        
        const {emp_name,employee_id}=req.body;
      

        const  data=await client.query(`insert into employee (emp_name,employee_id)values('${emp_name}','${employee_id}')`);
        const {rowCount,rows}=data;

}

export default about;
