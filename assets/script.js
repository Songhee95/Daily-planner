$(document).ready(function(){
    // DOM VARIABLES
    var currentDate = $('#currentDay');
    var hourDisplay =$('.hour');
    var timeBlockDisplay = $('.time-block');
    var saveButton = $('.saveBtn');
    var ContainerRow = $('.row');
    var textArea = $('textarea');
    var array =[];
    // JS VARIABLES
    var timeZone = moment().format('MMMM Do YYYY');
    var hourCheck = parseInt(moment().format('HH'),10);
    // FUNCTION DEFINITIONS
    // Date display function on the header section
    currentDate.text(timeZone);
    // clone timeblock row div element 
    function createElement(){
        for(var i=17; i>=9; i--){
            // Verify the first time-block time(6pm) is pass or not
            validation();
            var rowClone = ContainerRow.clone();
            rowClone.insertAfter(ContainerRow);
            hourDisplay.empty();
            // timeblock element create
            if(i==12){
                hourDisplay.append(i+'pm');
                textArea.attr('value', i)
            }else if(i>12){
                var k=(i-12);
                hourDisplay.append(k+'pm');
                textArea.attr('value',i);
            }else{
                hourDisplay.append(i +'am');
                textArea.attr('value',i);
            }
        }
    }
    // VERIFYING THE TIME PASSING ON SPECIFIC TEXTAREA
    // ADD CLASS TO CHANGE STYLE
    function validation(){
        timeBlockDisplay.removeClass('past');
        timeBlockDisplay.removeClass('present');
        timeBlockDisplay.removeClass('future');
        var timeBlockVal = textArea.attr('value');
        var timeBlockValInt = parseInt(timeBlockVal,10);
        if(timeBlockValInt < hourCheck){
            timeBlockDisplay.addClass('past');
        }else if(timeBlockValInt==hourCheck){
            timeBlockDisplay.addClass('present');
        }else if(timeBlockValInt >hourCheck){
            timeBlockDisplay.addClass('future');
        }
    }
    createElement();


    // FUNCTION CALLS
 
    // EVENT LISTENERS
    // If I click save button, the input is saved to local storage.
    saveButton.on('click', function(){
        var input = timeBlockDisplay.val();
        localStorage.setItem('input', input);
    })
    // get stored item from local Storage
    function init(){
        var inputDisplay = localStorage.getItem('input');
        timeBlockDisplay.text(inputDisplay);
    }
    init();
})