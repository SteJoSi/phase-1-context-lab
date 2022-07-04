/* Your Code Here */
function createEmployeeRecord(empArray) {
    return {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    const empObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    }
    this.timeInEvents.push(empObj)
    return this
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ")
    const empObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    }
    this.timeOutEvents.push(empObj)
    return this
}

function hoursWorkedOnDate(dateForm) {
    const timeIn = this.timeInEvents.find(event => event.date === dateForm)   
    const timeOut = this.timeOutEvents.find(event => event.date === dateForm)

    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    //console.log("this", this)
    return this.payPerHour * hours

}

function findEmployeeByFirstName(collection, firstNameString) { 
    return collection.find(emp => emp.firstName === firstNameString)
}

function calculatePayroll(empRecords) {
    //console.log("empRecords", empRecords)
    const record = empRecords.map(employee => allWagesFor.call(employee))
    return record.reduce((currentValue, total) => currentValue + total)
 }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

