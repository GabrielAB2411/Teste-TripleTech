const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "teste",
})

app.use(cors());
app.use(express.json());

var xlsx = require("xlsx");
var wb = xlsx.readFile("AdicionarAgendamento.xlsx")
var ws = wb.Sheets["Worksheet"];
var dataXlsx = xlsx.utils.sheet_to_json(ws);
var updatedDataXlsx;
var schedulesRegistered;

app.post("/register", (req, res) => {
    if (schedulesRegistered !== undefined) {
        schedulesRegistered.forEach(scheduleRegistered => {
            if (scheduleRegistered.DATA_INICIO !== dataXlsx[0].DATA_INICIO && scheduleRegistered.DATA_INICIO !== dataXlsx[1].DATA_INICIO && scheduleRegistered.DATA_INICIO !== dataXlsx[2].DATA_INICIO) {
                if (updatedDataXlsx !== undefined && scheduleRegistered.DATA_INICIO === updatedDataXlsx[0].DATA_INICIO) {
                    console.log("Agenda(s) em conflito: " + scheduleRegistered.ID)
                } else {
                    let SQL = "INSERT INTO schedules (DATA_INICIO, DATA_FIM) VALUES (?, ?)";
                    db.query(SQL, [scheduleRegistered.DATA_INICIO, scheduleRegistered.DATA_FIM], (err, result) => {
                        if (err) console.log(err);
                        console.log(SQL);
                    })
                }
            } else {
                console.log("Agenda(s) em conflito: " + scheduleRegistered.ID)
            }
        })
    } else {
        let SQL = "INSERT INTO schedules (DATA_INICIO, DATA_FIM) VALUES (?, ?)";
        dataXlsx.forEach(schedule => {
            db.query(SQL, [schedule.DATA_INICIO, schedule.DATA_FIM], (err, result) => {
                if (err) console.log(err);
                console.log(SQL)
            })
        })
    }
})

app.get("/getSchedulesRegistered", (req, res) => {
    let SQL = "SELECT * from schedules";
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        res.send(result);
        schedulesRegistered = result;
    })
})

app.put("/update", (req, res) => {
    var updateXlsx = require("xlsx");
    var updateWb = updateXlsx.readFile("AtualizarAgendamento.xlsx")
    var updateWs = updateWb.Sheets["Worksheet"];
    var updateData = updateXlsx.utils.sheet_to_json(updateWs);
    updatedDataXlsx = updateData

    if (schedulesRegistered !== undefined) {
        schedulesRegistered.forEach(scheduleRegistered => {
            if (scheduleRegistered.DATA_INICIO !== updateData[0].DATA_INICIO) {
                    let SQL = "UPDATE schedules set DATA_INICIO = ?, DATA_FIM = ? WHERE ID = ?";
                    db.query(SQL, [updateData[0].DATA_INICIO, updateData[0].DATA_FIM, updateData[0].ID], (err, result) => {
                        if (err) console.log(err);
                        console.log(SQL);
                    })       
            } else {
               console.log("Agenda(s) em conflito: " + scheduleRegistered.ID);
            }
        })
    } else {
        console.log("Nenhum registro para atualizar!");
    }
})

app.listen(3001, () => {
    console.log("Server online");
});



