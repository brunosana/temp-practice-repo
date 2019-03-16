const schedule = require('node-schedule')

//Parâmetros -> Minutos Segundos Hora Dia Mes Dia(da Semana)
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 5', function () {
    console.log('Executando Tarefa', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa')
}, 20000)

//Regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second = 22
const tafera2 = schedule.scheduleJob(regra, function () {
    console.log('Tarefa 2 eoq', new Date().getSeconds())
})