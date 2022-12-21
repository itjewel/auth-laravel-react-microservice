
import React, {useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom';
import AuthUser from '../components/AuthUser';
import { CategoryModal } from './CategoryModal';
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
const ProductCategory = () => {
    const { id } = useParams();
    const {http} = AuthUser();
    const [projects, setProject] = useState([]);
    const [users, setUsers] = useState([]);
    const [assign, setAssign] = useState([]);
  
    const getprojectInformation = async (id) => {  
      try {
        // get individual Project
          const response = await http.get(`/getprojectInfo/${id}`); 
          setProject(response.data);
  
          // get User list
          const users = await http.get(`/get-users`); 
          setUsers(users.data);
  
          // get assign project list
          const assignRes = await http.get(`/get-assign/${id}`); 
          setAssign(assignRes.data);
          
      } catch (error) {
          console.log(error)
      }
    }
  
    useEffect(()=>{  
      getprojectInformation(id);
    },[id])
  
    // This method for assign 
    let assignHandeler = async (event) =>{
      const userId = event.target.value;
      const data = {'userId': userId, 'projectId':id};
      if (event.target.checked) {
        // user assign project
        await http.post('/assign-task',data);
      } else {
        // user unassign project
        await http.post('/unassign-task',data);
      }
    }
  
    return (
        <div className="col-12 col-xl-12">
           
        <div className="card">
            <div className="card-header">
                <CategoryModal/>
          
                
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vanessa Tucker</td>
                        <td>
                            <img width='120' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                        </td>
                        <td className="table-action">
                            <a href="#"><i className="align-middle" data-feather="edit-2"></i></a>
                            <a href="#"><i className="align-middle" data-feather="trash"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>William Harris</td>
                        <td>
                        <img width='120' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                        </td>
                        <td className="table-action">
                            <a><AiFillEdit/></a>
                            <a><AiFillDelete /></a>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ProductCategory
