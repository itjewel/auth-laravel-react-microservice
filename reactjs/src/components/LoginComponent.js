import { useState } from "react"
import AuthUser from './AuthUser';

export default function LoginComponent() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    }

    return(
        <>      
            <div className="mb-3">
                <label className="form-label">Email</label>
                
                <input type="email" className="form-control form-control-lg" placeholder="Enter email"
onChange={e=>setEmail(e.target.value)}
id="email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>											
                <input type="password" className="form-control form-control-lg" placeholder="Enter password"  onChange={e => setPassword(e.target.value)}
id="pwd" />
            </div>
            
            <div className="text-center mt-3">
            <button type="button" onClick={submitForm} className="btn btn-lg btn-primary">Sign in</button>
            </div>
        </> )
}