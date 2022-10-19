import React,{ useState,useEffect} from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';


function Getuser() {
   
        const[posts, setPosts]= useState([])

    useEffect(() =>{
       axios.get('http://localhost:4000/user')
       .then((response)=>{
            setPosts(response.data)
       })
       .catch((error)=>{
        console.error(error)
        })
    },[])
  
    return (
    
       <> 
        {posts.map((post,key)=>{
            return(
                
             <div>   
          

           <Table striped bordered hover="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>email</th>
            <th>contato</th>
           
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{post.nome}</td>
            <td>{post.email}</td>
            <td>{post.contato}</td>
            
            
            <td>Table cell</td>
          </tr>
    
            </tbody>
            </Table>



           </div>
           
            )
           

      })}
      

      </>
  );
}

export default Getuser;