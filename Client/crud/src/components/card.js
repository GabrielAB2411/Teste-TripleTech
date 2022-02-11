import React from "react"
import './card.css';

export default function card(props) {
    return(
        <div className="card-container">
            <h1 className="card-title"> ID do agendamento: {props.scheduleId}</h1>
            <p className="card-info">Inicia em: {props.dataInicio}</p>
            <p classname= "card-info">Termina em: {props.dataFim}</p>
        </div>
    )
}