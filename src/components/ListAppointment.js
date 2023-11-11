import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Appointments.css"

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/appointments")
      .then((response) => {
        setAppointments(response.data);
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
            <th scope="col">Nombre Paciente</th>
            <th scope="col">Fecha de la cita</th>
            <th scope="col">Profesional</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            
              <tr key={index}>
                <th>{appointment.patient.firstName} {appointment.patient.lastName}</th>
                <th>{new Date(appointment.appointmentDate).toLocaleDateString()}</th>
                <th>{appointment.healthcareProvider.name}</th>
              </tr>

              
  
          ))}
        </tbody>
      </table>

      
      <a className="ref" href="http://localhost:3000/set/appointment">Registrar Cita</a>


    </div>
  );
};

export default AppointmentList;
