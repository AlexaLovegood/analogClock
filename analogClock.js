// variables
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let secondChecker = second;

//second checker
function secondHand(second) {
  if (secondChecker === second) {
    //move secondHand
    if (secondChecker === 59) {
      secondChecker = 0;
    } else {
      secondChecker++;
    }
  }
}
