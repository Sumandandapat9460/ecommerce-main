import Landing from "./Component/Landing";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Adminlogin from "./Component/Adminlogin";
import Userlogin from "./Component/Userlogin";
import AdminSignUp from "./Component/AdminSignUp";
import AdminHomepage from "./Component/AdminHomePage";
import UserSignUp from "./Component/USerSignUp";
import UserHomePage from "./Component/UserHomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./Component/Error";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return ( 
    <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path='/*' element={<Error/>}/>
                <Route path='/' element={<Landing/>}/>
                <Route path='/adminlogin' element={<Adminlogin/>}/>
                <Route path='/userlogin' element={<Userlogin/>}/>
                <Route path='/adminsignup' element={<AdminSignUp/>}/>
                <Route path='/adminhomepage/*' element={<AdminHomepage/>}/>
                <Route path='/usersignup' element={<UserSignUp/>}/>
                <Route path='/userhomepage/*' element={<UserHomePage/>}/>
              </Routes>
            </BrowserRouter>
            <ToastContainer/>
    </div>
   );
}
 
export default App;

