import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import UserRow from './UserRow'

const Alluser = () => {
  const [users,setUser] = useState([])
  useEffect(()=>{
   fetch(`https://fulance-sever.onrender.com/api/v1/user/allm`,{
     method:'GET',
     headers:{
       
  },
   }).then(res=>res.json())
   .then(data=>setUser(data.data))    

 },[])
  
 
 
  return (
    <div className="mt-4 text-center table" >
    <Table striped bordered hover size="sm" >
      <thead>
        <tr>
        
          <th>Id</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          
          users?.map((user)=><tr key={user._id} user={user}>
          
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.role} </td>
          </tr>)

        }
     
      </tbody>
    </Table>
  </div>


  )
}

export default Alluser
