//Layered four functions to create a keyless car that you can only drive if you're 18+ and you have a driver licence.

function turnTheKey () {
    key = prompt("Turn the car on by turning the key. (Type: 'turn key')");
    if (key === "turn key") {
        startTheCar ();
    }else{alert("Please try it again"); }
}
function startTheCar () {
    var user = prompt("Car has turned on. Please confirm to start the car. (Type: 'yes' or 'no')");
    if (user === "yes") {
        checkDriverAge ();
    }else if (user === "no") {
        alert("Your car will turn off in five seconds.");
    }else{alert("Please try it again"); }
}

function checkDriverAge () {
    var age = prompt("What is your age?");
    if(age >= 18) {
         driverLicence ();
    } else if (age < 18) {
        alert("You should not be driving! Your car will turn off in five seconds.");
    }else{alert("Please try it again"); }
}

function driverLicence() {
    var driver = prompt("Is your driver licence with you?");
    if (driver === "yes") {
        alert("Powering on. Enjoy the ride!");
    }else if (driver === "no") {
        alert("Your should take your driver licence with you. Your car will turn off in five seconds. ");
    }else{alert("Please try it again"); }
    
}
turnTheKey();