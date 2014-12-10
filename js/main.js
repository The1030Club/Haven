// smooth scrolling function for <a href=ID> tags

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// TEST TEST

$(function(){
  $(".hamburger-button").on("click", function(evt){
    $(this).toggleClass("showing")
  })
})

$(function(){
  $(".hamburger-button").on("click", function(evt){
    $(".js-show-menu").toggleClass("on")
  })
})

// TEST TEST



// Micah JS Below

console.log('holly crap it is js');

var max2000sYear = 15;
var validSerial;

$('#queryButton').click(function(){
	
//parse serial number based on rules    

  //get serial number and length  
  var serialNumber = $('#serialNumberInput').val();   
  var serialNumberLength = parseInt(serialNumber.length);
 
  // different logic based on length of the serial number
  if (serialNumberLength == 10) 
    { //10 char      
      if (charToCheckIsLetter(serialNumber, 4) == true) 
        {          
          //extract year and turn 2 digit into 4 digit
          var year = parseInt(serialNumber.substr(2, 2));
          year = turn2DigitYearTo4Digit(year);          
          var week = parseInt(serialNumber.substr(0,2));
          var monthText = turn2DigitWeekToMonthText(week);
          validserial = true;
        } 
      else 
        {
          console.log('invalid serial number');
          validSerial = false;
        }
    } //end 10 char
  else if (serialNumberLength == 9)
    { //9 char
      console.log('in 9');

      //check to make sure they are all integers
      var allIntegers = true; 
      for (x=0; x < serialNumberLength; x++) {
        var isNumber = charToCheckIsNumber(serialNumber, x);
          if (isNumber == true && allIntegers == true) {
            allIntegers == true;  
          } else {
            allIntegers == false; //if it has been false anytime before it is false
          } // is number
      } // for
      
      if (allIntegers == true) {
         //extract year and turn 2 digit into 4 digit
          var year = parseInt(serialNumber.substr(0, 2));
          year = turn2DigitYearTo4Digit(year);          
          var month = parseInt(serialNumber.substr(2,2));
          var monthText = turn2DigitMonthToMonthText(month);  
      }
      else {
        console.log('invalid serial number');
        validSerial = true;
      } //if all integers
      
    } //end 9 char
  else 
    {
      console.log('invalid number');
    }
//end of serial number parsing.  Outcome is year and month.

//input outcome into html turn2DigitMonthToMonthText(month)
$('#age').text('Your HVAC was born in ' + monthText + ' in ' + year);
 
console.log(year);
console.log(month);

  
}) //end queryButton.click


function charToCheckIsLetter(stringToCheck, charToCheck){
      var charCode = stringToCheck.charCodeAt(charToCheck);
      
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
        {
          var isLetter = true;
        }  
      else
        {
          var isLetter = false; 
        }
  
      console.log(isLetter);
      return isLetter;
} //checking if a letter
   

function charToCheckIsNumber(stringToCheck, charToCheck){
      var charCode = stringToCheck.charCodeAt(charToCheck);
      
      if (charCode >= 48 && charCode <=57)
        {
          var isNumber = true;
        }  
      else
        {
          var isNumber = false; 
        }
  
      console.log(isNumber);
      return isNumber;
} //checking if a number

function turn2DigitYearTo4Digit(twoDigit) {
   var fourDigit;
   if (twoDigit < max2000sYear)
     {fourDigit = twoDigit + 2000; } 
   else
     {fourDigit = twoDigit + 1900; }
   return fourDigit;
} //end 2digit

function turn2DigitMonthToMonthText(month) {
    console.log(month);
    console.log(parseInt(month));
    var monthText;
    switch (parseInt(month)) 
    {
      case 1: monthText = 'January'; break;
      case 2: monthText = 'February'; break;
      case 3: monthText = 'March'; break;
      case 4: monthText = 'April'; break;
      case 5: monthText = 'May'; break;
      case 6: monthText = 'June'; break;
      case 7: monthText = 'July'; break;
      case 8: monthText = 'August'; break;
      case 9: monthText = 'September'; break;
      case 10: monthText = 'October'; break;
      case 11: monthText = 'November'; break;
      case 12: monthText = 'December'; break;
      default: monthText = 'unknown month';  
    }
    console.log(monthText);
    return monthText;
} //month to text

function turn2DigitWeekToMonthText(week) {
    console.log(week);
    console.log(parseInt(week));
  
    var weekText;  
    if (week <= 13) {
      weekText = 'first quarter';
    }else if (week <= 26) {
      weekText = 'second quarter';
    }else if (week <= 39) {
      weekText = 'third quarter';
    }else if (week <= 52) {
      weekText = 'fourth quarter';
    }else {
      weekText = 'undefined month';
    }  
    console.log(weekText);
    return weekText;
} //week to text


