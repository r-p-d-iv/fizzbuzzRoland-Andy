$(function(fizzBuzz) {
    let goalNum = null;
    $("#number-chooser").submit(function(event) {
        // console.log() goalNumber;
        event.preventDefault();
        goalNum = $('#number-choice').val();
        for (let i = 1; i <= goalNum; i++) {
            if (i % 15 === 0) {
            $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>`);
            }
            else if (i % 3 === 0) {
            $('.js-results').append(`<div class="fizz-buzz-item fizz"><span>fizz</span></div>`);
            }
            else if (i % 5 === 0) {
            $('.js-results').append(`<div class="fizz-buzz-item buzz"><span>buzz</span></div>`);
            }
            else
            $('.js-results').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
        }
    });
});
        
    
    //ON .submit DO event
    //select form input
    //create empty array
    //$(#number-chooser).
    //loop 'userInput' number of times
    // render fizzbuzz under results
    //if statements for fizz logic, push i or altered value
//generate array 1 - userInput
//implement fizzBuzz logic
//take altered array
