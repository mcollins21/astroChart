const readlineSync = require('readline-sync');

console.log("Welcome to Astro Chart...");

var birthMonth = parseInt(readlineSync.question("Enter your birth month (as a number): "));
var birthDay = parseInt(readlineSync.question("Enter your birth day: "));

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

if (sunSign !== "") {
    console.log("Your sun sign is: " + sunSign);

    // Display personality traits based on the sun sign
    switch (sunSign) {
        case "Aries":
            console.log("Personality traits of Aries: Energetic, Courageous, Confident");
            break;
        case "Taurus":
            console.log("Personality traits of Taurus: Patient, Reliable, Practical");
            break;
        case "Gemini":
            console.log("Personality traits of Gemini: Adaptable, Curious, Expressive");
            break;
        case "Cancer":
            console.log("Personality traits of Cancer: Intuitive, Empathetic, Protective");
            break;
        case "Leo":
            console.log("Personality traits of Leo: Charismatic, Confident, Generous");
            break;
        case "Virgo":
            console.log("Personality traits of Virgo: Analytical, Practical, Modest");
            break;
        case "Libra":
            console.log("Personality traits of Libra: Diplomatic, Social, Cooperative");
            break;
        case "Scorpio":
            console.log("Personality traits of Scorpio: Passionate, Resourceful, Brave");
            break;
        case "Sagittarius":
            console.log("Personality traits of Sagittarius: Adventurous, Optimistic, Honest");
            break;
        case "Capricorn":
            console.log("Personality traits of Capricorn: Ambitious, Disciplined, Responsible");
            break;
        case "Aquarius":
            console.log("Personality traits of Aquarius: Independent, Intellectual, Humanitarian");
            break;
        case "Pisces":
            console.log("Personality traits of Pisces: Compassionate, Artistic, Intuitive");
            break;
    }

    // Check compatibility based on elements
    var compatibleSigns = [];

    if (sunSign === "Aries" || sunSign === "Leo" || sunSign === "Sagittarius") {
        compatibleSigns = ["Aries", "Leo", "Sagittarius"];
    } else if (sunSign === "Cancer" || sunSign === "Scorpio" || sunSign === "Pisces") {
        compatibleSigns = ["Cancer", "Scorpio", "Pisces"];
    } else if (sunSign === "Gemini" || sunSign === "Libra" || sunSign === "Aquarius") {
        compatibleSigns = ["Gemini", "Libra", "Aquarius"];
    } else if (sunSign === "Taurus" || sunSign === "Virgo" || sunSign === "Capricorn") {
        compatibleSigns = ["Taurus", "Virgo", "Capricorn"];
    }

    console.log("Compatible signs: " + compatibleSigns.join(", "));
} else {
    console.log("Invalid input. Please enter a valid birth month and day.");
}
