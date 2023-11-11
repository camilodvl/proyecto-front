import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Appointments.css"

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patients")
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Lista de citas</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <th>{patient.id}</th>
              <th>{patient.firstName}</th>
              <th>{patient.lastName}</th>
              <th>{new Date(patient.dateOfBirth).toLocaleDateString()}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <a className="ref" href="http://localhost:3000/set/patient">Registrar Paciente</a>
    </div>
  );
};

export default PatientList;
