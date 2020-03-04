var numHours = 0;
var numMinutes = 0;
var numSeconds = 0;

function increaseHours() {
    const elementHours = document.getElementById("hours");

    if (numHours < 99) {
        numHours++;
    } else {
        numHours = 0;
    }

    elementHours.innerHTML = numHours.toString().padStart(2, "0");
}

function decreaseHours() {
    const elementHours = document.getElementById("hours");

    if (numHours > 0) {
        numHours--;
    } else {
        numHours = 99;
    }

    elementHours.innerHTML = numHours.toString().padStart(2, "0");
}

function increaseMinutes() {
    const elementMinutes = document.getElementById("minutes");

    if (numMinutes < 59) {
        numMinutes++;
    } else {
        numMinutes = 0;
    }

    elementMinutes.innerHTML = numMinutes.toString().padStart(2, "0");
}

function decreaseMinutes() {
    const elementMinutes = document.getElementById("minutes");

    if (numMinutes > 0) {
        numMinutes--;
    } else {
        numMinutes = 59;
    }

    elementMinutes.innerHTML = numMinutes.toString().padStart(2, "0");
}

function increaseSeconds() {
    const elementSeconds = document.getElementById("seconds");

    if (numSeconds < 59) {
        numSeconds++;
    } else {
        numSeconds = 0;
    }

    elementSeconds.innerHTML = numSeconds.toString().padStart(2, "0");
}

function decreaseSeconds() {
    const elementSeconds = document.getElementById("seconds");

    if (numSeconds > 0) {
        numSeconds--;
    } else {
        numSeconds = 59;
    }

    elementSeconds.innerHTML = numSeconds.toString().padStart(2, "0");
}