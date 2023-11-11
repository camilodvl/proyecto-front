import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [patientId, setPatientId] = useState('');
  const [providerId, setProviderId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = { appointmentDate, patient: { id: patientId }, healthcareProvider: { id: providerId } };
    axios.post('http://localhost:8080/api/appointments', appointment)
      .then(response => {
        console.log(response.data);
        window.location.href = 'http://localhost:3000/appointments';
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='container'>
<h2>Crear cita</h2>
<form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="appointmentDate">Fecha de la cita:</label>
        <input type="date" id="appointmentDate" value={appointmentDate} onChange={(event) => setAppointmentDate(event.target.value)} />
      </div>
      <div>
        <label htmlFor="patientId">Id del paciente:</label>
        <input type="text" id="patientId" value={patientId} onChange={(event) => setPatientId(event.target.value)} />
      </div>
      <div>
        <label htmlFor="providerId">Id del profesional:</label>
        <input type="text" id="providerId" value={providerId} onChange={(event) => setProviderId(event.target.value)} />
      </div>
      <button className='btn btn-primary' type="submit">Crear cita</button>
    </form>

    </div>
    
  );
};

export default AppointmentForm;
