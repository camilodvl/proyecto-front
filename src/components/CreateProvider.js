import React, { useState } from 'react';
import axios from 'axios';

const HealthcareProviderForm = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const provider = { name, specialty };
    axios.post('http://localhost:8080/api/providers', provider)
      .then(response => {
        console.log(response.data);
        window.location.href = 'http://localhost:3000/providers';
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="specialty">Especialidad:</label>
        <input type="text" id="specialty" value={specialty} onChange={(event) => setSpecialty(event.target.value)} />
      </div>
      <button type="submit">Crear Profesional</button>
    </form>
    </div>
  );
};

export default HealthcareProviderForm;
