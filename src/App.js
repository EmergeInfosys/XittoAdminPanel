
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserDetails from './components/UserDetails';
import VendorsDetails from './components/VendorsDetails';
import AddService from './components/Service/AddService';
import AddBrand from './components/Brand/AddBrand';
import ViewServices from './components/Service/ViewServices';
import AddProblem from './components/Problem/AddProblem';
import ViewProblem from './components/Problem/ViewProblem';
import ViewBrand from './components/Brand/ViewBrand';


function App() {

  return (
    <>
    <Router>
              <Routes>
                  <Route exact path="/login" element={<Login/>} />
              </Routes>
      <div className='section-bg'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2'>
                <Sidebar/>
            </div> 

            <div className='col-md-10'>
              <div className="row">
                <div className="col-md-12 p-0">
                  <Topbar/>
                </div>
              </div>
              <Routes>
                  <Route exact path="/" element={<Content/>} />
                  <Route exact path="/user" element={<UserDetails/>} />
                  <Route exact path="/vendors" element={<VendorsDetails/>} />
                  <Route exact path="/add-service" element={<AddService/>} />
                  <Route exact path="/view-service" element={<ViewServices title="Service One" brand="Canon"/>} />
                  <Route exact path="/add-brand" element={<AddBrand/>} />
                  <Route exact path="/view-brand" element={<ViewBrand/>} />
                  <Route exact path="/add-problem" element={<AddProblem/>} />
                  <Route exact path="/view-problem" element={<ViewProblem/>} />
                  
              </Routes>
            </div>  
          </div>
        </div>
      </div>
    </Router>
  </>
  );
}

export default App;
