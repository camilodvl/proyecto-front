import React, { useState } from 'react';
import axios from 'axios';

function CreatePatient() {
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  });

  const handleInputChange = (event) => {
    setPatient({
      ...patient,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/api/patients', patient)
      .then(response => {
        console.log(response.data);
        window.location.href = 'http://localhost:3000/patients';
       
      });
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <label htmlFor="firstName">Nombre:</label>
      <input
        type="text"
        name="firstName"
        value={patient.firstName}
        onChange={handleInputChange}
      />
      <label htmlFor="lastName">Apellido:</label>
      <input
        type="text"
        name="lastName"
        value={patient.lastName}
        onChange={handleInputChange}
      />

      <label htmlFor="dateOfBirth">Fecha de naciemiento:</label>
      <input
        type="date"
        name="dateOfBirth"
        value={patient.dateOfBirth}
        onChange={handleInputChange}
      />
      <button type="submit">Crear paciente</button>
    </form>
    </div>
  );
}

export default CreatePatient;