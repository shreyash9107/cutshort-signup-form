import './app.scss';
import style from './app.scss'
import AddName from "./Components/SignUpComponent/AddNameComponent";
import {
  BrowserRouter as Router,
  Route,
    Routes
} from "react-router-dom";
import WorkPlace from "./Components/SignUpComponent/WorkPlaceComponent";
import logo from '../src/Components/Molecule/Icons/logo.PNG'
import SetupWork from "./Components/SignUpComponent/SetupComponent";
import Success from "./Components/SignUpComponent/FinalComponent";
import {useEffect, useState} from "react";
function App() {
    const [isActive,setIsActive] = useState(false)
    const [isActive2,setIsActive2] = useState(false)
    const [isActive3,setIsActive3] = useState(false)
    const [isActive4,setIsActive4] = useState(false)

  return (

      <Router>
          <div className={'App'}>
              <div className={'auth_root'}>
                     <div className={'mb-5'}>
                          <img  src={logo}/> Eden
                      </div>
                        <div className={'step-bar'}>
                                 <ul className="multi-step-bar">
                                      <li  className={ 'active'}>Name</li>
                                      <li className={isActive2 ? 'active' : ''}>Workspace</li>
                                       <li className={isActive3 ? 'active' : ''}>Setup</li>
                                        <li className={isActive4 ? 'active' : ''}>completed</li>
                                 </ul>
                        </div>



                      <Routes>
                      <Route exact path="/" element={<AddName setIsActive={setIsActive2}/>} />
                      <Route exact path="/workplace" element={<WorkPlace setIsActive={setIsActive3}/>} />
                      <Route exact path="/setup" element={<SetupWork setIsActive={setIsActive4}/>} />
                      <Route exact path="/completed" element={<Success />} />
                  </Routes>
              </div>
          </div>
      </Router>

  );
}

export default (App);
