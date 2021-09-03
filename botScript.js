let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

let numClosedDoors = 3;

let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let currentlyPlaying = true;

let startButton = document.getElementById("start");


const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;
};

console.log('see' + currentlyPlaying)


const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
};


const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
        openDoor1 = beachDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    }

};

let doorImage1 = document.getElementById("door1");

if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.onclick = () => {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
}

let doorImage2 = document.getElementById("door2");
if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.onclick = () => {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    };
}
let doorImage3 = document.getElementById("door3");

if (currentlyPlaying && !isClicked(doorImage3)) {

    doorImage3.onclick = () => {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

randomChoreDoorGenerator()