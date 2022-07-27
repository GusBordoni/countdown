var finalDate = new Date("Jul 27, 2022 17:00:00").getTime();
var countdownClock = document.getElementById('countdown');

var x = setInterval(function() {

  // Get today's date and time
  var todayDate = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = finalDate - todayDate;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    let animation = countdownClock.animate([
      { opacity: '1' },
      { opacity: '0' }
      ], { 
      duration: 1000,
      });
    
    animation.onfinish = function() {
      countdownClock.style.display = 'none';
      document.getElementsByTagName('h1')[0].innerText = 'IT IS TIME!';
      document.getElementById('ready').style.display = 'block';
    }
  } else {
    document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }
}, 1000);

