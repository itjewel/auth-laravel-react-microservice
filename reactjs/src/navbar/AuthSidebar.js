import { Link } from 'react-router-dom';
import AuthUser from '../components/AuthUser';

export const AuthSidebar = () => {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
         <nav id="sidebar" className="sidebar">
			<div className="sidebar-content js-simplebar">
				
                <Link className="nav-link sidebar-brand" to="/">
                 <span className="align-middle">Admin</span>
                </Link>

				<ul className="sidebar-nav">		
					<li className="sidebar-item active">
                    <Link className="nav-link sidebar-link" to="/dashboard">
                        <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
                    </Link>
						
					</li>

          <li className="sidebar-item">
						<a href="#product" data-toggle="collapse" className="sidebar-link collapsed">
                        <i className="align-middle" data-feather="check-circle"></i> <span className="align-middle">Product</span>
                        </a>
						<ul id="product" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item">
                                <Link className="nav-link sidebar-link" to="/product-category">
                                    Product category
                                </Link>                                
                            </li>

                            <li className="sidebar-item">
                                <Link className="nav-link sidebar-link" to="/add-project">
                                    Add product
                                </Link>                                
                            </li>
							
						</ul>
					</li>

          <li className="sidebar-item">
						<a href="#purchase" data-toggle="collapse" className="sidebar-link collapsed">
              <i className="align-middle" data-feather="check-circle"></i> <span className="align-middle">Purchase</span>
            </a>
						<ul id="purchase" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
							<li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Create RFQ</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">RFQ list</a></li>
							<li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Requested RFQ list</a></li>
						</ul>
					</li>


		

					<li className="sidebar-item">
						<a className="sidebar-link" href="pages-settings.html">
              <i className="align-middle" data-feather="settings"></i> <span className="align-middle">Settings</span>
            </a>
					</li>

				</ul>

			
			</div>
          
       
            
		</nav>
       
       
          
            
                {/* All are route here */}
                
         
        </>
    );
}
