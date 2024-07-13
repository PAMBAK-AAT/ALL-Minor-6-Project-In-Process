let blueCar = document.getElementById("blueCar");
let redCar = document.getElementById("redCar");

blueCar.addEventListener("animationiteration", function () {
    let random = Math.floor(Math.random() * 3) * 250;
    blueCar.style.left = random + "px";
});

window.addEventListener("keydown", function (event) {
    let redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));

    // Check if the key pressed is the right arrow key (key code 39)
    if (event.keyCode === "39") {
        // Ensure the new position won't take the red car out of the container
        if (redCarLeft < 260) {
            redCar.style.left = redCarLeft + 250 + "px";
        }
    }

    // Check if the key pressed is the left arrow key (key code 37)
    if (event.keyCode === "37") {
        // Ensure the new position won't take the red car out of the container
        if (redCarLeft > 0) {
            redCar.style.left = redCarLeft - 250 + "px";
        }
    }
});



// parseInt --> It converts our number into an integer
// window.getComputedStyle(redCar) --> It gives all property of our red car
// getPropertyValue("Left") --> It gives left property of the red car
