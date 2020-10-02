$(document).ready(function(){
    // DOM VARIABLES
    var currentDate = $('#currentDay');
    var hourDisplay =$('.hour');
    var timeBlockDisplay = $('.time-block');
    var saveButton = $('.saveBtn');
    var ContainerRow = $('.row');
    var textArea = $('textarea');
    // JS VARIABLES
    var timeZone = moment().format('MMMM Do YYYY');
    var hourCheck = parseInt(moment().format('HH'),10);
    // FUNCTION DEFINITIONS
    // Date display function on the header section
    currentDate.text(timeZone);
    // clone timeblock row div element 
    function createElement(){
        for(var i=17; i>=9; i--){
            var a=JSON.parse(localStorage.getItem(i));
            // Verify the first time-block time(6pm) is pass or not
            validation();
            var rowClone = ContainerRow.clone();
            rowClone.insertAfter(ContainerRow);
            hourDisplay.empty();
            // timeblock element create
            if(i==12){
                hourDisplay.append(i+'pm');
                textArea.attr('value', i);
                saveButton.attr('value',i);
                textArea.text(a);

            }else if(i>12){
                var k=(i-12);
                hourDisplay.append(k+'pm');
                textArea.attr('value',i);
                saveButton.attr('value',i);
                textArea.text(a);
            }else{
                hourDisplay.append(i +'am');
                textArea.attr('value',i);
                saveButton.attr('value',i);
                textArea.text(a);
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
    // If I click save button, the input is saved to array and local Storage
    $('.saveBtn').on('click', function(){
        var keyName = $(this).attr('value');
        var userInput = $(this).prev($('.textarea')).val();
        localStorage.setItem(keyName, JSON.stringify(userInput));
    })
})