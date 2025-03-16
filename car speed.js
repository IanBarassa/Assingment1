function checkSpeed() {
    let speed =
        prompt("Please enter the speed of the car (in km/h):");

    speed = Number(speed);

    if (isNaN(speed) || speed < 0) {
        alert("Invalid input. Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const demeritPointThreshold = 5;
    if (speed < speedLimit) {
        alert("Ok");
    } else {

        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / demeritPointThreshold);
        alert(`Demerit points: ${demeritPoints}`);
    }
}

checkSpeed();