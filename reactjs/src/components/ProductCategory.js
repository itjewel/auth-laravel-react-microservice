
import React, {useState, useEffect} from 'react'
import { Link, useParams, useSearchParams} from 'react-router-dom';
import AuthUser from '../components/AuthUser';
import { CategoryModal } from './CategoryModal';
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
 import Pagination from './Pagination';
const ProductCategory = () => {
    const backendUrl = `${process.env.REACT_APP_BASEURL_BACKEND_BASE}`;
    const { id } = useParams();
    const [searchParams] = useSearchParams()
    const {http} = AuthUser();
    const [categories, setCategories] = useState([]);
    const [categoriesPagination, setCategoriesPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
  
    const getCategoryInfo = async (id) => {  
        let urlparam = searchParams.get('page');
        //  console.log(urlparam)
      try {  
          // get Product Category list
          const productCategory = await http.get(`/product-category?page=${urlparam?urlparam: currentPage}&search=jewel`); 
          const {data,current_page,per_page } = productCategory.data
        //   console.log(productCategory.data)
          setCategories(data);        
          setCategoriesPagination(productCategory.data);        
          setCurrentPage(current_page);        
          setPerPage(per_page);        
          setTotalPage(per_page);        
        //   console.log(productCategory.data)  
      } catch (error) {
          console.log(error)
      }
    }
  
    useEffect(()=>{  
        getCategoryInfo();
    },[currentPage])
  
    const pageNumber = (id)=>{
        setCurrentPage(id);
    }
    const testPurpose = async ()=>{
        let urlparam = searchParams.get('page');
        const productCategory = await http.get(`/product-category?page=${urlparam?urlparam: currentPage}&search=kamal`); 
        console.log(productCategory)
    }
  
    return (
        <div className="col-12 col-xl-12">
           
        <div className="card">
            <div className="card-header">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <CategoryModal/>
                    <form className="d-flex" method="get">
                    <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit" onClick={testPurpose}>Search</button>
                    </form>
                </div>
                </nav>
               
                
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
                {categories && categories.map((value )=> (
                    <tr key={value.id}>
                    <td>{value.category_name}</td>
                    <td>
                        <img width={120} src={backendUrl+'uploads/'+value.cat_image}/>
                    </td>
                    <td className="table-action">
                        <a><AiFillEdit/></a>
                        <a><AiFillDelete /></a>
                    </td>
                </tr>
                ))}
               
                </tbody>
                
            </table>
           <Pagination links={categoriesPagination.links} method={pageNumber}/>
          
        </div>
    </div>
    )
}

export default ProductCategory
