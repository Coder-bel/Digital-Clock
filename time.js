const gethr = document.querySelector("#gethr")
const getmins = document.querySelector("#getmins")
const getsec = document.querySelector("#getsec")
const getday = document.querySelector("#getday")
const getmonth = document.querySelector("#getmonth")
const getyear = document.querySelector('#getyear')





let date = new Date()
let secs =date.getSeconds()
let mins = date.getMinutes()
let hr = date.getHours()
let da = date.getDay()
let month = date.getMonth() 
let dat = date.getDate()
let yrs = date.getFullYear()
let mon = month ++

gethr.innerHTML = hr;
getmins.innerHTML = mins;
getsec.innerHTML = secs;
getmonth.innerHTML = month ;
getday.innerHTML = dat;
getyear.innerHTML = yrs;


setInterval( function() {
    getsec.innerHTML = secs++
    if (secs > 59) {
        secs = 0
        mins++
    getmins.innerHTML = mins
k    }
    // getmins.innerHTML = mins++
    if (mins > 58) {
        mins = 0
        hr++
        gethr.innerHTML = hr
    }
}, 1000);
