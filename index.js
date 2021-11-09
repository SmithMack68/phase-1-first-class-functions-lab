
function returnFirstTwoDrivers(drivers) {
     return drivers.slice(0, 2);  
}  
function returnLastTwoDrivers(drivers) {
     return drivers.slice(-2);   
}

//forEach()???
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const selectDifferentDrivers = function(drivers, driversToReturn){
    return driversToReturn(drivers);
};
  //function selectDifferentDrivers(drivers) {
    //return selectingDrivers[0][1];
//}
//selectingDrivers[0];
//selectingDrivers[1];
//selectDifferentDrivers(drivers, returnFirstTwoDrivers());

   
// let method = 
function createFareMultiplier(multiplier) {
     return function(fare) {
        return multiplier * fare;
     }; 
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);





     

