
// import { Link } from "react-router-dom";
// import { InertiaLink } from "@inertiajs/inertia-react";
import { Link, useParams, useSearchParams} from 'react-router-dom';
  
export default function Pagination({ links, method }) {
    const [searchParams] = useSearchParams()
     console.log(links)
    let urlparam = searchParams.get('page');
   
  
    return (
        links?.length > 3 && (
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                 
                {links.map((link, index)=>{
                     if (index === 0) return (
                        <li key={index} className={`page-item ${link.url == null && 'disabled'}`}>
                            <Link className="page-link" to={`/product-category?page=${urlparam - 1}`} onClick={(pre)=>method(index - 1)}>Previous</Link> 
                          
                        </li>
                      );

                      
        
                      if (index === links?.length-1) return (
                        <li key={index} className={`page-item ${urlparam == links?.length-2 ?'disabled': ''}`}>
                            <Link className="page-link" to={`/product-category?page=${parseInt(urlparam) + 1}`} onClick={(pre)=>method(index + 1)}>Next</Link> 
                       
                          
                        </li>
                      );

                    return(
                        <li className={`page-item  ${link.active && "active"}`} key={index}>
                            <Link className="page-link" to={`?page=${index}`} onClick={(pre)=>method(index)}>{link.label}</Link> 
                          {/* <InertiaLink className="page-link" href={link.url}>{link.label}</InertiaLink> */}
                        </li>
                    )
                })}
                
            </ul>
            </nav>
        )
    );
}