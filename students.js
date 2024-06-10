const students = async (req,res)=>{
    res.send([{Id:'101',Name:'Wahid',address:'Nawabshsh',university:'Mehran'},
               {Id:'102',Name:'Asad',address:'Bandhi',university:'Sindh'},
               {Id:'103',Name:'Aslam',address:'Duar',university:'Quest'},
               {Id:'104',Name:'Ali',address:'Sukkar',university:'KU'},
               {Id:'105',Name:'Ameen',address:'Bandhi',university:'NED'}
    ])
}

export default students;