$(document).ready(function(){
    // DOM VARIABLES
    var hourDisplay =$('.hour');
    var timeBlockDisplay = $('.time-block');
    var saveButton = $('.saveBtn');
    var ContainerRow = $('.container');
    var textArea = $('textarea');
    // JS VARIABLES
    var timeZone = moment().format('MMMM Do YYYY, h:mm:ss a');
    var hourCheck = parseInt(moment().format('HH'),10);
    var ind;
    // FUNCTION DEFINITIONS
    // clone .container element 
    function createElement(){
        for(var i=17; i>=9; i--){
            validation();
        // Verify the first time-block time(6pm) is pass or not
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
})