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
//checker update
function checker(timeChecker, maxNum) {
  if (timeChecker === maxNum) {
    timeChecker = 0;
  } else {
    timeChecker++;
  }
}

//second checker
function secondHand() {
  if (secondChecker === second) {
    let moveDeg = move60 * secondChecker;
    //move secondHand
    document.documentElement.style.setProperty(
      "--rotation-second",
      `${moveDeg}deg`
    );
    if (secondChecker === 59) {
      secondChecker = 0;
    } else {
      secondChecker++;
    }
  }
}
//minhand
function minuteHand() {
  if (minuteChecker === minute) {
    let moveDeg = move60 * minuteChecker;
    //move secondHand
    document.documentElement.style.setProperty(
      "--rotation-minute",
      `${moveDeg}deg`
    );
    if (minuteChecker === 59) {
      minuteChecker = 0;
    } else {
      minuteChecker++;
    }
  }
}

//hourhand
function hourHand() {
  if (minuteChecker === minute) {
    let moveDeg = move60 * minuteChecker;
    //move secondHand
    document.documentElement.style.setProperty(
      "--rotation-minute",
      `${moveDeg}deg`
    );
    if (minuteChecker === 59) {
      minuteChecker = 0;
    } else {
      minuteChecker++;
    }
  }
}

setInterval(updateDate, 100);
setInterval(secondHand, 100);
setInterval(minuteHand, 100);
