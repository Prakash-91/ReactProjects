import './App.css';
import {Route,Routes} from 'react-router-dom';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import AnalyzeData from './components/AnalyzeData';
import Home from './components/Home';
import {toast,ToastContainer } from 'react-toastify';


function App()  {

    return (
      <div className="App">
        <ToastContainer autoClose={2000} position="bottom-center"/>
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/patientDetails/:patientId" element={<CollectClinicals/>}/>
        <Route  path="/analyze/:patientId" element={<AnalyzeData/>}/>
        <Route  path="/addPatient" element={<AddPatient/>}/>
        </Routes>
      </div>
    );
  }

export default App;
