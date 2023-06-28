const readlineSync = require('readline-sync');

var birthMonth = readlineSync.question("Enter your birth month (as a number): ");
var birthDay = readlineSync.question("Enter your birth day: ");

birthMonth = parseInt(birthMonth);
birthDay = parseInt(birthDay);

if (
    birthMonth >= 1 && birthMonth <= 12 &&
    birthDay >= 1 && birthDay <= 31
) {
    var sunSign = "";

    if ((birthMonth === 3 && birthDay >= 21) || (birthMonth === 4 && birthDay <= 19)) {
        sunSign = "Aries";
    } else if ((birthMonth === 4 && birthDay >= 20) || (birthMonth === 5 && birthDay <= 20)) {
        sunSign = "Taurus";
    } else if ((birthMonth === 5 && birthDay >= 21) || (birthMonth === 6 && birthDay <= 20)) {
        sunSign = "Gemini";
    } else if ((birthMonth === 6 && birthDay >= 21) || (birthMonth === 7 && birthDay <= 22)) {
        sunSign = "Cancer";
    } else if ((birthMonth === 7 && birthDay >= 23) || (birthMonth === 8 && birthDay <= 22)) {
        sunSign = "Leo";
    } else if ((birthMonth === 8 && birthDay >= 23) || (birthMonth === 9 && birthDay <= 22)) {
        sunSign = "Virgo";
    } else if ((birthMonth === 9 && birthDay >= 23) || (birthMonth === 10 && birthDay <= 22)) {
        sunSign = "Libra";
    } else if ((birthMonth === 10 && birthDay >= 23) || (birthMonth === 11 && birthDay <= 21)) {
        sunSign = "Scorpio";
    } else if ((birthMonth === 11 && birthDay >= 22) || (birthMonth === 12 && birthDay <= 21)) {
        sunSign = "Sagittarius";
    } else if ((birthMonth === 12 && birthDay >= 22) || (birthMonth === 1 && birthDay <= 19)) {
        sunSign = "Capricorn";
    } else if ((birthMonth === 1 && birthDay >= 20) || (birthMonth === 2 && birthDay <= 18)) {
        sunSign = "Aquarius";
    } else if ((birthMonth === 2 && birthDay >= 19) || (birthMonth === 3 && birthDay <= 20)) {
        sunSign = "Pisces";
    }

    console.log("Your sun sign is: " + sunSign);
} else {
    console.log("Invalid input. Please enter valid birth month and day.");
}
