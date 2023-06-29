const readlineSync = require('readline-sync');

console.log("Welcome to Astro Chart...");

var birthMonth = parseInt(readlineSync.question("Enter your birth month (as a number): "));
var birthDay = parseInt(readlineSync.question("Enter your birth day: "));

var sunSign = "";

if ((birthMonth === 3 && birthDay >= 21) || (birthMonth === 4 && birthDay <= 19)) {
    sunSign = "Aries";
    console.log("Personality traits of Aries: Energetic, courageous, confident");
} else if ((birthMonth === 4 && birthDay >= 20) || (birthMonth === 5 && birthDay <= 20)) {
    sunSign = "Taurus";
    console.log("Personality traits of Taurus: Patient, reliable, practical");
} else if ((birthMonth === 5 && birthDay >= 21) || (birthMonth === 6 && birthDay <= 20)) {
    sunSign = "Gemini";
    console.log("Personality traits of Gemini: Adaptable, curious, expressive");
} else if ((birthMonth === 6 && birthDay >= 21) || (birthMonth === 7 && birthDay <= 22)) {
    sunSign = "Cancer";
    console.log("Personality traits of Cancer: Intuitive, empathetic, protective");
} else if ((birthMonth === 7 && birthDay >= 23) || (birthMonth === 8 && birthDay <= 22)) {
    sunSign = "Leo";
    console.log("Personality traits of Leo: Charismatic, confident, generous");
} else if ((birthMonth === 8 && birthDay >= 23) || (birthMonth === 9 && birthDay <= 22)) {
    sunSign = "Virgo";
    console.log("Personality traits of Virgo: Analytical, practical, modest");
} else if ((birthMonth === 9 && birthDay >= 23) || (birthMonth === 10 && birthDay <= 22)) {
    sunSign = "Libra";
    console.log("Personality traits of Libra: Diplomatic, social, cooperative");
} else if ((birthMonth === 10 && birthDay >= 23) || (birthMonth === 11 && birthDay <= 21)) {
    sunSign = "Scorpio";
    console.log("Personality traits of Scorpio: Passionate, resourceful, brave");
} else if ((birthMonth === 11 && birthDay >= 22) || (birthMonth === 12 && birthDay <= 21)) {
    sunSign = "Sagittarius";
    console.log("Personality traits of Sagittarius: Adventurous, optimistic, honest");
} else if ((birthMonth === 12 && birthDay >= 22) || (birthMonth === 1 && birthDay <= 19)) {
    sunSign = "Capricorn";
    console.log("Personality traits of Capricorn: Ambitious, disciplined, responsible");
} else if ((birthMonth === 1 && birthDay >= 20) || (birthMonth === 2 && birthDay <= 18)) {
    sunSign = "Aquarius";
    console.log("Personality traits of Aquarius: Independent, intellectual, humanitarian");
} else if ((birthMonth === 2 && birthDay >= 19) || (birthMonth === 3 && birthDay <= 20)) {
    sunSign = "Pisces";
    console.log("Personality traits of Pisces: Compassionate, artistic, intuitive");
}

if (sunSign !== "") {
    console.log("Your sun sign is: " + sunSign);
} else {
    console.log("Invalid input. Please enter valid birth month and day.");
}
