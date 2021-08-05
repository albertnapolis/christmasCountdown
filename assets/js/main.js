/*
Funtion that calculate the christmas day
*/

function christmasCountdown() {

  // get the current date
  let currentDate = new Date();

  // get the current month, add 1 because getMonth() function start with January in 0
  let currentMonth = currentDate.getMonth() + 1;

  // get the current day
  let currentDay = currentDate.getDay();


  // get the christmas year
  let nextChristmasYear = currentDate.getFullYear();
  if (currentMonth === 12 && currentDay === 25) {
    // if today is the christmas day
    //add 1 to the christmas year
    nextChristmasYear += 1;
  }

  // concatinate next christmas year to christmas date
  let nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';

  // get the next christmas date
  let christmasDay = new Date(nextChristmasDate);

  // subtract the current date to the date of the next christmas, this will return in seconds
  let daysBeforeChristmasDay = Math.floor((christmasDay.getTime() - currentDate.getTime()) / 1000);

  // initializes days, hours, minutes and seconds
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  // convert seconds into days, hours, minutes
  if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {

    // get the number of days left
    // 3600 is the total number of seconds in an hour
    // 24 is the total number of hours in a day
    days = Math.floor(daysBeforeChristmasDay / (3600 * 24));

    // subtract days to the day of christmas
    daysBeforeChristmasDay -= days * 3600 * 24;

    //get the number of hours
    hours = Math.floor(daysBeforeChristmasDay / 3600);
    daysBeforeChristmasDay -= hours * 3600;

    // get the number of minutes left
    minutes = Math.floor(daysBeforeChristmasDay / 60);
    daysBeforeChristmasDay -= minutes * 60;

    // get the remaining seconds
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
