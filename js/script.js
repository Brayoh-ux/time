function realtimeClock() {
    var rtClock = new Date();
    // var year = rtClock.getFullYear();
    // var month = rtClock.getMonth();
    // var day = rtClock.getDay();
    // var hours = rtClock.getHours();
    // var minutes = rtClock.getMinutes();
    // var seconds = rtClock.getSeconds();

    // var e = " : " + month + " : " + day;

    // // add am & pm
    // var amPm = (hours < 12 ) ? "AM" : "PM";

    // // convert hours to 12-hour format
    // hours = (hours > 12) ? hours - 12 : hours;

    // // pad hours, mins and sec with leading zeros
    // hours = ("0" + hours).slice(-2);
    // minutes = ("0" + minutes).slice(-2);
    // seconds = ("0" + seconds).slice(-2); 
    


// display clock
    document.getElementById('clock').innerHTML = rtClock;
    var t = setTimeout(realtimeClock, 500);

    // document.getElementById('day').innerHTML = year + e.UTCString();
}