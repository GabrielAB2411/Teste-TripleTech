import React, { useState, useEffect} from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/card"

function App() {

  const [listSchedules, setListSchedules] = useState();

  const createSchedule = () => {
    Axios.post("http://localhost:3001/register").then((response) => {
      alert("Agendamentos cadastrados com sucesso");
    })
  }

  const updateSchedule = () => {
    Axios.put("http://localhost:3001/update").then((response) => {
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getSchedulesRegistered").then((response) => {
      setListSchedules(response.data)
    })
  })


  return (
    <div className="app-container">
      <div className="buttons-container">
        <h1 className="title">Gerenciador de agendamentos</h1>
        <button className="btn-agendar" onClick={createSchedule}>Agendar</button> <br />
        <button className="btn-atualizar" onClick={updateSchedule}>Atualizar agendamentos</button><br />
      </div>
      {typeof listSchedules !== "undefined" && listSchedules.map((value) => {
        return <Card
        key={value.ID}
        dataInicio={value.DATA_INICIO}
        dataFim={value.DATA_FIM}
        scheduleId={value.ID}
        >
        </Card>;
      })}
    </div>
  );
}

export default App;
