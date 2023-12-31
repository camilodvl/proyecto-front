import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MedicationList() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/medications')
      .then(response => {
        setMedications(response.data);
      });
  }, []);

  const deleteMedication = (id) => {
    axios.delete(`http://localhost:8080/api/medications/${id}`)
      .then(() => {
        setMedications(medications.filter(medication => medication.id !== id));
      });
  };

  return (
    <div className='container'>
      <h2>Lista de Medicamentos</h2>
    <table className='table'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dosis</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {medications.map(medication => (
          <tr key={medication.id}>
            <td>{medication.name}</td>
            <td>{medication.dosage}</td>
            <td>
              <button className='btn btn-danger' onClick={() => deleteMedication(medication.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <a className="ref" href="http://localhost:3000/set/medication">Registrar Medicamentos</a>
    </div>
  );
}

export default MedicationList;
