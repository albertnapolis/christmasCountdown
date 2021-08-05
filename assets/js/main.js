/*
Funtion that calculate the christmas day
*/

function christmasCountdown() {

  let currentDate = new Date(); // get the current date
  let currentMonth = currentDate.getMonth() + 1; // get the current month
  let currentDay = currentDate.getDay(); // get the current day

  // get the christmas year
  let nextChristmasYear = currentDate.getFullYear();
  if (currentMonth === 12 && currentDay === 25) {
    // if today is the christmas day
    nextChristmasYear += 1;
  }

  // concatinate next christmas year to christmas date
  let nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';

  // get the next christmas date
  let christmasDay = new Date(nextChristmasDate);

  // get the number of seconds before christmas
  let daysBeforeChristmasDay = Math.floor((christmasDay.getTime() - currentDate.getTime()) / 1000);

  // initializes days, hours, minutes and seconds
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
    days = Math.floor(daysBeforeChristmasDay / (3600 * 24));
    daysBeforeChristmasDay -= days * 3600 * 24;
    hours = Math.floor(daysBeforeChristmasDay / 3600);
    daysBeforeChristmasDay -= hours * 3600;
    minutes = Math.floor(daysBeforeChristmasDay / 60);
    daysBeforeChristmasDay -= minutes * 60;
    seconds = daysBeforeChristmasDay;
  }

  document.querySelector('#days').innerHTML = days;
  document.querySelector('#hours').innerHTML = hours;
  document.querySelector('#minutes').innerHTML = minutes;
  document.querySelector('#seconds').innerHTML = seconds;

  
  setTimeout(christmasCountdown, 1000);
}

// call the function
christmasCountdown();
