import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePatient from "./components/CreatePatient";
import PatientList from "./components/ListPatients";
import HealthcareProviderForm from "./components/CreateProvider";
import AppointmentForm from "./components/CreateAppointment";
import AppointmentList from "./components/ListAppointment";
import Indexap from "./components/Indexap";
import ProviderList from "./components/ListProviders";
import { MapContainer } from "./components/Maps";
import MedicationList from "./components/ListMedication";
import CreateMedication from "./components/CreateMedication";


function App() {
  /*<Route path='/people' element={<InsertPeople/>}/>
  <Route path ='/get/:id' element={<UpdatePeople/>}/>*/
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Indexap/>}/>
        <Route path='/set/patient' element={<CreatePatient/>}/>
        <Route path='/patients' element={<PatientList/>}/>
        <Route path='/providers' element={<ProviderList/>}/>
        <Route path='/set/provider' element={<HealthcareProviderForm/>}/>
        <Route path='/set/appointment' element={<AppointmentForm/>}/>
        <Route path='/appointments' element={<AppointmentList/>}/>
        <Route path='/maps' element={<MapContainer/>}/>
        <Route path='/medication' element={<MedicationList/>}/>
        <Route path='/set/medication' element={<CreateMedication/>}/>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
