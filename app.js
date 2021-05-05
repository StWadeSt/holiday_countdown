//declaing all of the different holiday dates that i will be using 
const newYears = new Date('Jan 1, 2021 00:00:00').getTime();
const christmas = new Date('Dec 25, 2021 00:00:00').getTime();
const valentines = new Date('Feb 14, 2021 00:00:00').getTime();
const eastor = new Date('Apr 4, 2021 00:00:00').getTime();
const thanksgiving = new Date('Nov 25, 2021 00:00:00').getTime();

//value of one year in seconds. This is used to increment the year when the current date is past the selected holiday
var yearValue = 31536000000;

//the following two lines gets the current year and saves it into a variable we will be used later
var d = new Date();
var currentYear = d.getFullYear();


// variable holding my timer. Will be used to set intervals and clear intervals

// setting a default interval for the time to start when webpage loads
// the default is set to show countdown to New Years 2022
myTimer = setInterval(function(){calculateTimeLeft(newYears + yearValue)}, 1000);


    //calling the sellection element to check which holiday the user selected
    //getting this will allow me to change the timer countdown as well as the holiday label
    let selectOption = document.getElementById('holidayList')


    //adding an event listener to check when the option is changed
    selectOption.addEventListener('change', () =>{
        //getting the value of the option chosen by the user 
        var option = selectOption.options[selectOption.selectedIndex].value;
        

        //if statement varifies which option was chosen and calls function to change the counter
        if (option == 1) {
            changeHoliday(christmas,'christmas.jpg','Countdown to Chistmas', 'Dec 25th ');  
        }else if(option == 2){
            changeHoliday(valentines,'valentines.jpg','Countdown to Valentines Day', 'Feb 14th ');  
        }
        else if(option == 3){
            changeHoliday(eastor,'eastor.jpg','Countdown to Eastor', 'Apr 4th ');  
        }
        else if(option == 4){
            changeHoliday(thanksgiving,'thanksgiving.jpg','Countdown to Thanksgiving', 'Nov 25th ');  
        }else {
            changeHoliday(newYears,'new_years.jpg','Countdown to New Years','Jan 1st ');  
        }
    })

    //this fuction changes the information displayed when the user selects a different holiday
    function changeHoliday(holiday,background,string,date){

        document.body.style.background = background;

        //this line simply gets the current date value. 
        var now = new Date().getTime();

        //this if statement checks if this current date is past the holiday. If that is the case it increments the year 
        //so that we can accurately calculate the remaining time till the selected holiday.
        //we increase the year by adding the yearValue variable wo saved earlier.
        if (holiday < now) 
            {
                date += (currentYear+1);
                holiday += yearValue;
            }
            else{   //else if the selected holiday is still coming up we 
                date +=currentYear;
            }

        //here we are changing the displayed holiday information to the currently selected holidays information. 
        document.getElementById('countdownString').innerText = string
        document.getElementById('date').innerText = date

        //here we are clearing/resetting the timer 
        if (myTimer != null) {
            clearTimer();
        }
        //updating the timer
        myTimer = setInterval(function(){calculateTimeLeft(holiday)}, 1000);
        
        
    }

//here we are clearing/resetting the timer intervals
function clearTimer() {
    clearInterval(myTimer);
}
    
//this fuction we are simply getting the difference between the current date and time and the selected holiday
//then we convert the difference into readable data to show in the timer.
function calculateTimeLeft(then){
    //this line is getting the current time and date
    var now = new Date().getTime();
    //this line is getting the difference(gap) between now and the selected holiday
    var gap = then - now;

    var seconds = 1000;
    var minutes = seconds* 60;
    var hours = minutes * 60;
    var days = hours * 24;

    var d = Math.floor(gap/(days));
    var h = parseInt(Math.floor(gap % (days))/ (hours));
    var m = parseInt(Math.floor(gap % (hours))/ (minutes));
    var s = parseInt(Math.floor(gap % (minutes))/ (seconds));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}



