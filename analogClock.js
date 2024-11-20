// variables
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let secondChecker = second;
let move60 = 360 / 60;
//update date
function updateDate() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
}
//document.documentElement.style.setProperty("--rotation-second", `${move60}deg`);
secondHand(second, secondChecker, move60);
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

setInterval(updateDate, 100);
setInterval(secondHand, 100);
