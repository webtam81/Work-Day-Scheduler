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

let tasks;

//FUNCTIONS
function generateBlocks() {
    //generate time blocks for each hour (9am - 5pm)
    let blockTime = dayStartTime; //time of this time block
    for (h = 0; h < totalHours + 1; h++) {

        let blockHour = blockTime.format("H"); //hour of this block

        //bootstrap row
        let rowEl = $('<div>')
            .addClass('row time-block')
            .attr('data-num',[h]);

        //column for time
        let hourColEl = $('<div>')
            .addClass('col col-sm-12 col-md-1 hour')
            .text(blockTime.format('h A'));
            
        //column for task
        let taskDivEl = $('<textarea>')
        .addClass('col col-sm-12 col-md-10 task');

        //add classes to blocks depending if past, present or future
        if (blockHour < currentHour) {
            taskDivEl.addClass('past');
        } else if (blockHour == currentHour) {
            taskDivEl.addClass('present');
        } else if (blockHour > currentHour) {
            taskDivEl.addClass('future');
        }

        //column for button
        //button
        //style - icon
        let btnEl = $('<button>')
        .addClass('col col-sm-12 col-md-1 saveBtn')
        .addClass('saveBtn' + blockHour);

        timeBlocksEl.append(rowEl);
        rowEl.append(hourColEl);
        rowEl.append(taskDivEl);
        rowEl.append(btnEl);

        blockTime = blockTime.add(1, 'h'); //increment hours
    }
}

function getTasks() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks !== null) {
        tasks = JSON.parse(storedTasks);
        
        $('*[data-num="0"] textarea').val(tasks.taskHr0);
        $('*[data-num="1"] textarea').val(tasks.taskHr1);
        $('*[data-num="2"] textarea').val(tasks.taskHr2);
        $('*[data-num="3"] textarea').val(tasks.taskHr3);
        $('*[data-num="4"] textarea').val(tasks.taskHr4);
        $('*[data-num="5"] textarea').val(tasks.taskHr5);
        $('*[data-num="6"] textarea').val(tasks.taskHr6);
        $('*[data-num="7"] textarea').val(tasks.taskHr7);
        $('*[data-num="8"] textarea').val(tasks.taskHr8);
        $('*[data-num="9"] textarea').val(tasks.taskHr9);
        $('*[data-num="10"] textarea').val(tasks.taskHr10);
        $('*[data-num="11"] textarea').val(tasks.taskHr11);
        $('*[data-num="12"] textarea').val(tasks.taskHr12);
        $('*[data-num="13"] textarea').val(tasks.taskHr13);
        $('*[data-num="14"] textarea').val(tasks.taskHr14);
        $('*[data-num="15"] textarea').val(tasks.taskHr15);
        $('*[data-num="16"] textarea').val(tasks.taskHr16);
        $('*[data-num="17"] textarea').val(tasks.taskHr17);
        $('*[data-num="18"] textarea').val(tasks.taskHr18);
        $('*[data-num="19"] textarea').val(tasks.taskHr19);
        $('*[data-num="20"] textarea').val(tasks.taskHr20);
        $('*[data-num="21"] textarea').val(tasks.taskHr21);
        $('*[data-num="22"] textarea').val(tasks.taskHr22);
        $('*[data-num="23"] textarea').val(tasks.taskHr23);
    }
    //console.log(tasks);
}

function saveTask() {
    let changedTask = $(event.target);
    let dataNum = changedTask.parent('div').attr('data-num');
    let taskHr = 'taskHr' + dataNum;
    let newTask = $('*[data-num="'+dataNum+'"] textarea').val();
    //console.log(newTask);
    tasks[taskHr] = newTask;
    localStorage.setItem('tasks',JSON.stringify(tasks));
    //console.log('task stored');
}

//INITIALISE PAGE
dayHeadingEl.text(dayjs().format('dddd, DD MMMM YYYY')); //set date
generateBlocks();
getTasks();

//EVENT LISTENERS
$('.saveBtn').on('click', saveTask);

//TESTS
//console.log(`Start Time: ${dayStartTime}`);
//console.log(`End Time: ${dayEndTime}`);
//console.log(`Start Hour: ${dayStartHour}`);
//console.log(`End Hour: ${dayEndHour}`);
//console.log(`Total Hours: ${totalHours}`);