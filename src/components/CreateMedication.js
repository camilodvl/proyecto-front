import React, { useState } from 'react';
import axios from 'axios';

function CreateMedication() {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDosageChange = (event) => {
    setDosage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const medication = { name, dosage };
    axios.post('http://localhost:8080/api/medications', medication)
      .then(response => {
        console.log(response.data);
        window.location.href = 'http://localhost:3000/medication';
       
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Dosis:
        <input type="text" value={dosage} onChange={handleDosageChange} />
      </label>
      <button type="submit">Crear medicamento</button>
    </form>
    </div>
  );
}

export default CreateMedication;
