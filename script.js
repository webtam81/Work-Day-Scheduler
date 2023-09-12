//VARIABLES
const today = dayjs();

let dayHeadingEl = $('#currentDay'); //current day paragraph in header
let saveBtn = $('.saveBtn');

let dayStartTime = dayjs().hour(0).minute(00); //temporary start time for testing
//let dayStartTime = dayjs().hour(9).minute(00); //day start time
//let dayEndTime = dayjs().hour(17).minute(00); //day end time
let dayEndTime = dayjs().hour(23).minute(00); //temporary end time for testing

let dayStartHour = dayStartTime.format('H');
let dayEndHour = dayEndTime.format('H');
let totalHours = parseInt(dayEndHour - dayStartHour);
let currentHour = parseInt(dayjs().format('H'));

let timeBlocksEl = $('#time-blocks'); //container for time blocks

//FUNCTIONS
function getTask() {
    localStorage.getItem('task');
}

function saveTask() {
    localStorage.setItem('task','test tast');
}


//INITIALISE PAGE
dayHeadingEl.text(dayjs().format('dddd, DD MMMM YYYY')); //set date





//time blocks for each hour (9am - 5pm)
let blockTime = dayStartTime; //time of this time block
for (h = 0; h < totalHours + 1; h++) {

    //bootstrap row
    let rowEl = $('<div>')
        .addClass('row time-block');

    //column for time
    let hourColEl = $('<div>')
        .addClass('col col-sm-12 col-md-1 hour')
        .text(blockTime.format('h A'));
        
    //column for task
    //TODO style - text colours
    //TODO save to localstorage
    //TODO populate if localstorage
    let taskDivEl = $('<textarea>')
    .addClass('col col-sm-12 col-md-10 task');
    
    //add classes to blocks depending if past, present or future
    let blockHour = blockTime.format("H"); //hour of this block

    if (blockHour < currentHour) {
        taskDivEl.addClass('past');
    } else if (blockHour == currentHour) {
        taskDivEl.addClass('present');
    } else if (blockHour > currentHour) {
        taskDivEl.addClass('future');
    }

    //console.log(blockTime.format("H")); todo RM
    //console.log(dayjs().format('H')); todo RM

    //column for button
    //button
    //style - icon
    let btnEl = $('<button>')
    .addClass('col col-sm-12 col-md-1 saveBtn');

    timeBlocksEl.append(rowEl);
    rowEl.append(hourColEl);
    rowEl.append(taskDivEl);
    rowEl.append(btnEl);

    blockTime = blockTime.add(1, 'h'); //increment hours
}
 
//TODO
//save event in local storage
saveBtn.on('click', saveTask());


//EVENT LISTENERS
//keyup?
//savebtn?



//TESTS
console.log(`Start Time: ${dayStartTime}`);
console.log(`End Time: ${dayEndTime}`);
console.log(`Start Hour: ${dayStartHour}`);
console.log(`End Hour: ${dayEndHour}`);
console.log(`Total Hours: ${totalHours}`);