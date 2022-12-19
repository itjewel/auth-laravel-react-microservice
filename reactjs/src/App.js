
import AuthUser from './components/AuthUser';


import { AuthSidebar } from './navbar/AuthSidebar';

import { Dashboard } from "./pages/Dashboard";
 import Guest from './navbar/guest';
//  import Auth from './navbar/auth';
// import { Navbar } from "./navbar/Navbar";

import {Routes, Route } from 'react-router-dom';
import ProductCategory from './components/ProductCategory';
import AddProject from './components/AddProject';
import ViewProject from './components/ViewProject';
import SearchData from './components/SearchData';
import ProjectList from './components/ProjectList';
import { Layout } from './components/Layout';
function App() {
  document.title = `${process.env.REACT_APP_API_NAME}`;
  const {getToken} = AuthUser();
  if(!getToken()){
     return <Guest />
   
  }
  return (
     <div className="wrapper">   
      {/* <Auth />     */}
      <AuthSidebar />
      <Layout>
           <Routes>                    
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product-category" element={<ProductCategory />} />
              <Route path="/add-project" element={<AddProject />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/project-details/:id" element={<ViewProject />} />
              <Route path="/search-data" element={<SearchData />} />
          </Routes>
      </Layout>
      
     
     </div>
     
  );
  
}

export default App;
