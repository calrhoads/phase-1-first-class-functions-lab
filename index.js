const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length - 2)
}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
function createFareMultiplier(number) {
    const fareMultiplier = function(fare) {
        return fare * number
    }
    return fareMultiplier
}
function fareDoubler(number) {
    return createFareMultiplier(2)(number)
}
function fareTripler(number) {
    return createFareMultiplier(3)(number)
}
function selectDifferentDrivers(drivers,driverSelector) {
    return driverSelector(drivers)
}

