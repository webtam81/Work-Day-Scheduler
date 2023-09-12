//VARIABLES
var today = dayjs();
let dayHeading = $('#currentDay');
let dayStartTime = dayjs().hour(9).minute(00);
let dayEndTime = dayjs().hour(17).minute(00);
let dayStartHour = dayStartTime.format("H");
let dayEndHour = dayEndTime.format("H");
let totalHours = parseInt(dayEndHour - dayStartHour);


//INITIALISE PAGE
dayHeading.text(dayjs().format("dddd, DD MMMM YYYY"));



//TODO
//time blocks for each hour (9am - 5pm)
let blockTime = dayStartTime;
for (h = 0; h < totalHours; h++) {

    blockTime = blockTime.add(1, 'h');
    console.log(blockTime);
    console.log(blockTime.format("h A"));
}
 
//colour code time blocks 
//enter event in block when clicked
//save event in locat storage

//DONE
//current day at top of calendar

//TESTS
console.log(`Start Time: ${dayStartTime}`);
console.log(`End Time: ${dayEndTime}`);
console.log(`Start Hour: ${dayStartHour}`);
console.log(`End Hour: ${dayEndHour}`);
console.log(`Total Hours: ${totalHours}`);