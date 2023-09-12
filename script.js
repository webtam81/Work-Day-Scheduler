//VARIABLES
var today = dayjs();
let dayHeadingEl = $('#currentDay'); //current day in header
let dayStartTime = dayjs().hour(9).minute(00); //day start time
let dayEndTime = dayjs().hour(17).minute(00); //day end time
let dayStartHour = dayStartTime.format("H");
let dayEndHour = dayEndTime.format("H");
let totalHours = parseInt(dayEndHour - dayStartHour);

let timeBlocksEl = $('#time-blocks'); //container for time blocks

//INITIALISE PAGE
dayHeadingEl.text(dayjs().format("dddd, DD MMMM YYYY")); //set date


//time blocks for each hour (9am - 5pm)
let blockTime = dayStartTime; //time of this time block
for (h = 0; h < totalHours + 1; h++) {

    //bootstrap row
    let newRowEl = $('<div>')
        .addClass('row');

    //column for time
    let timeDivEl = $('<div>')
        .addClass('col time')
        .text(blockTime.format("h A"));
        
    //column for task
    let taskDivEl = $('<div>')
    .addClass('col task');

    //column for button
    let btnDivEl = $('<div>')
    .addClass('col save');
    
    //console.log(blockTime); //todo RM
    //console.log(blockTime.format("h A")); //todo RM

    timeBlocksEl.append(newRowEl);
    newRowEl.append(timeDivEl);
    newRowEl.append(taskDivEl);
    newRowEl.append(btnDivEl);

    blockTime = blockTime.add(1, 'h'); //add 1 hour

}
 
//TODO
//colour code time blocks 
//enter event in block when clicked
//save event in local storage

//DONE
//current day at top of calendar

//TESTS
console.log(`Start Time: ${dayStartTime}`);
console.log(`End Time: ${dayEndTime}`);
console.log(`Start Hour: ${dayStartHour}`);
console.log(`End Hour: ${dayEndHour}`);
console.log(`Total Hours: ${totalHours}`);