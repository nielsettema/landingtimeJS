// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  // hour = hour % 24 || 12; 

//Output the time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Background and Greeting
function setBgGreet () {
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {
    //  Ochtend
    document.body.style.backgroundImage = "url('../img/ochtend.jpg')";
    greeting.textContent = 'Goeiemorgen';
      } else if(hour < 18) {
    //  Middag
    document.body.style.backgroundImage ="url('../img/ochtend2.jpg')";
    greeting.textContent = 'Goeiemiddag';
    } else {
    document.body.style.backgroundImage = "url('../img/avond.jpg')";
    greeting.textContent = 'Goedenavond';
    }
    // Avond
}

// Run
showTime ();
setBgGreet();