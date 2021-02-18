//declaing all of the different holiday dates that i will be using 
const newYears = new Date('Jan 1, 2022 00:00:00').getTime();
const christmas = new Date('Dec 25, 2021 00:00:00').getTime();
const valentines = new Date('Feb 14, 2022 00:00:00').getTime();
const eastor = new Date('Apr 4, 2021 00:00:00').getTime();
const thanksgiving = new Date('Nov 25, 2021 00:00:00').getTime();



// variable holding my timer. Will be used to set intervals and clear intervals
var myTimer;


// setting a default interval for the time to start when webpage loads
// the default is set to show countdown to New Years 2022
myTimer = setInterval(function(){calculateTimeLeft(newYears)}, 1000);


    //calling the sellection element to check which holiday the user selected
    //getting this will allow me to change the timer countdown as well as the holiday label
    let selectOption = document.getElementById('holidayList')


    //adding an event listener to check when the option is changed
    selectOption.addEventListener('change', () =>{
        //getting the value of the option chosen by the user 
        var option = selectOption.options[selectOption.selectedIndex].value;
        

        //if statement varifies which option was chosen and calls function to change the counter
        if (option == 1) {
            changeHoliday(christmas,'christmas.jpg','Countdown to Chistmas', 'Dec 25th 2021');  
        }else if(option == 2){
            changeHoliday(valentines,'valentines.jpg','Countdown to Valentines Day', 'Feb 14th 2021');  
        }
        else if(option == 3){
            changeHoliday(eastor,'eastor.jpg','Countdown to Eastor', 'Apr 4th 2021');  
        }
        else if(option == 4){
            changeHoliday(thanksgiving,'thanksgiving.jpg','Countdown to Thanksgiving', 'Nov 25th 2021');  
        }else {
            changeHoliday(newYears,'new_years.jpg','Countdown to New Years','Jan 1st 2020');  
        }
    })

    function changeHoliday(holiday,background,string,date){

        document.body.style.background = background;

        document.getElementById('countdownString').innerText = string
        document.getElementById('date').innerText = date
        if (holiday == valentines ) {
            document.getElementById('date').innerText = "Feb 14th 2022"
        }
        else if(holiday == newYears){
            document.getElementById('date').innerText = "Jan 1st 2022"
        }

        if (myTimer != null) {
            clearTimer();
        }
        myTimer = setInterval(function(){calculateTimeLeft(holiday)}, 1000);
        
        
    }

function clearTimer() {
    clearInterval(myTimer);
}
    

function calculateTimeLeft(then){
    var now = new Date().getTime();
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



