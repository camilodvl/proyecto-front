import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./css/Appointments.css"

function ProviderList() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/providers')
      .then(response => {
        setProviders(response.data);
      });
  }, []);


  const deleteProvider = (id) => {
    axios.delete(`http://localhost:8080/api/providers/${id}`)
      .then(() => {
        setProviders(providers.filter(provider => provider.id !== id));
      });
  };
  return (
    <div className='container'>
      <h2>Lista de profesionales</h2>

    <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Especialidad</th>
          </tr>
        </thead>
        <tbody>
            {providers.map(provider => (
              <tr key={provider.id}>
                <td>
                {provider.id}
                </td>
                <td>
                {provider.name}
                </td>
                <td>
                {provider.specialty}
                </td>
                <td>
                <button onClick={() => deleteProvider(provider.id)}>Eliminar</button>
                  </td>
              </tr>
            ))}
          </tbody>
      </table>
      <a className="ref" href="http://localhost:3000/set/provider">Registrar profesional</a>
      </div>
  );
}

export default ProviderList;
