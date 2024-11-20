// variables
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let secondChecker = second;
let minuteChecker = minute;
let hourChecker = hour;
let move60 = 360 / 60;
let move12 = 360 / 12;
//update date
function updateDate() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
}

// move the second-hand
function moveSecondHand() {
  if (secondChecker === second) {
    // set the movement
    let moveDeg = move60 * secondChecker;
    //change rotation prop
    document.documentElement.style.setProperty(
      "--rotation-second",
      `${moveDeg}deg`
    );
    //increment the second checker
    if (secondChecker === 59) {
      secondChecker = 0;
    } else {
      secondChecker++;
    }
  }
}
// move the minute hand
function moveMinuteHand() {
  if (minuteChecker === minute) {
    // set the movement
    let moveDeg = move60 * minuteChecker;
    //change rotation prop
    document.documentElement.style.setProperty(
      "--rotation-minute",
      `${moveDeg}deg`
    );
    //increment the minute checker
    if (minuteChecker === 59) {
      minuteChecker = 0;
    } else {
      minuteChecker++;
    }
  }
}

// move the hour hand
function moveHourHand() {
  if (hourChecker === hour) {
    // set the movement
    let moveDeg = move12 * hourChecker;
    //change rotation prop
    document.documentElement.style.setProperty(
      "--rotation-hour",
      `${moveDeg}deg`
    );
    //increment the hour checker
    if (hourChecker === 23) {
      hourChecker = 0;
    } else {
      hourChecker++;
    }
  }
}

//repeat the function every 100 milliseconds
setInterval(updateDate, 100);
setInterval(moveSecondHand, 100);
setInterval(moveMinuteHand, 100);
setInterval(moveHourHand, 100);
