// Your code here
function createEmployeeRecord(arr) {
    const employee = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employee
}

function createEmployeeRecords(arr) {
    const employees = [];
    arr.forEach(employee => {
        employees.push(createEmployeeRecord(employee))
    })
    return employees
}

function createTimeInEvent(obj, timeInEvent) {
    obj.timeInEvents= [...obj.timeInEvents, {type:"TimeIn", hour:parseInt(timeInEvent.slice(11),10), date: timeInEvent.slice(0,10)}]
    return obj
}

function createTimeOutEvent(obj, timeOutEvent) {
    obj.timeOutEvents= [...obj.timeOutEvents, {type:"TimeOut", hour:parseInt(timeOutEvent.slice(11),10), date: timeOutEvent.slice(0,10)}]
    return obj
}

function hoursWorkedOnDate(employee, date) {
    const eventsIn = employee.timeInEvents
    const eventsOut = employee.timeOutEvents
    let timeIn
    let timeOut
    const onDateIn = eventsIn.find(event => event.date === date)
    const onDateOut = eventsOut.find(event => event.date === date)
    console.log(onDateIn)
    console.log("asdasd",onDateOut)

    timeIn = onDateIn.hour/100;

    timeOut = onDateOut.hour/100

    console.log(timeOut - timeIn)
    return (timeOut - timeIn)
}

function wagesEarnedOnDate(employee, date) {
    console.log(employee)
    console.log(date)
    const numOfHours = hoursWorkedOnDate(employee,date)
    console.log(numOfHours)
    return numOfHours*employee.payPerHour
}

function allWagesFor(employee) {
    let total = 0;
    const inEvents = employee.timeInEvents;
    inEvents.forEach(ev => {
        total += wagesEarnedOnDate(employee, ev.date)
    })
    console.log(total)
    return total
}

function findEmployeeByFirstName(employees, firstName){
    if (employees.some(employee => employee.firstName === firstName)){
        const matchedEmployees = []
        employees.forEach(employee => {employee.firstName === firstName? matchedEmployees.push(employee): null})
        return matchedEmployees[0]
    } else {
        return undefined
    }
}

function calculatePayroll(employees){
    let total = employees.reduce((acc, curr) => acc += allWagesFor(curr), 0);
    // employees.forEach(employee => {
    //     total += allWagesFor(employee)
    // })
    console.log(total)
    return total 
}