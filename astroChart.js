document.getElementById("astroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var birthMonth = parseInt(document.getElementById("birthMonth").value);
    var birthDay = parseInt(document.getElementById("birthDay").value);

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
        var resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = "";

        // Display the sun sign
        var sunSignHeading = document.createElement("h2");
        sunSignHeading.textContent = "Your sun sign is: " + sunSign;
        resultContainer.appendChild(sunSignHeading);

        // Display the personality traits
        var traitsHeading = document.createElement("h3");
        traitsHeading.textContent = "Personality traits of " + sunSign + ":";
        resultContainer.appendChild(traitsHeading);

        // Display the personality traits based on the sun sign
        var traitsList = document.createElement("ul");

        switch (sunSign) {
            case "Aries":
                createTrait("Energetic");
                createTrait("Courageous");
                createTrait("Confident");
                break;
            case "Taurus":
                createTrait("Patient");
                createTrait("Reliable");
                createTrait("Practical");
                break;
            case "Gemini":
                createTrait("Adaptable");
                createTrait("Curious");
                createTrait("Expressive");
                break;
            case "Cancer":
                createTrait("Intuitive");
                createTrait("Empathetic");
                createTrait("Protective");
                break;
            case "Leo":
                createTrait("Charismatic");
                createTrait("Confident");
                createTrait("Generous");
                break;
            case "Virgo":
                createTrait("Analytical");
                createTrait("Practical");
                createTrait("Modest");
                break;
            case "Libra":
                createTrait("Diplomatic");
                createTrait("Social");
                createTrait("Cooperative");
                break;
            case "Scorpio":
                createTrait("Passionate");
                createTrait("Resourceful");
                createTrait("Brave");
                break;
            case "Sagittarius":
                createTrait("Adventurous");
                createTrait("Optimistic");
                createTrait("Honest");
                break;
            case "Capricorn":
                createTrait("Ambitious");
                createTrait("Disciplined");
                createTrait("Responsible");
                break;
            case "Aquarius":
                createTrait("Independent");
                createTrait("Intellectual");
                createTrait("Humanitarian");
                break;
            case "Pisces":
                createTrait("Compassionate");
                createTrait("Artistic");
                createTrait("Intuitive");
                break;
        }

        resultContainer.appendChild(traitsList);

        // Function to create a trait item in the list
        function createTrait(trait) {
            var traitItem = document.createElement("li");
            traitItem.textContent = trait;
            traitsList.appendChild(traitItem);
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

        // Display compatible signs
        var compatibilityHeading = document.createElement("h3");
        compatibilityHeading.textContent = "Compatible signs:";
        resultContainer.appendChild(compatibilityHeading);

        var compatibleSignsText = document.createElement("p");
        compatibleSignsText.textContent = compatibleSigns.join(", ");
        resultContainer.appendChild(compatibleSignsText);
    } else {
        alert("Invalid input. Please enter a valid birth month and day.");
    }
});
