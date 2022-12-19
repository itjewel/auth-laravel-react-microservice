import { Footer } from "../components/Footer";
// import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../navbar/Navbar";
export const Layout = ({children}) => {
  return (
     <div className="main">
        <Navbar />
        
          <main className="content">
          <div className="container-fluid p-0">
                 {children}
           
          </div>
          </main>
          <Footer />
         
      </div>  
  )
}
