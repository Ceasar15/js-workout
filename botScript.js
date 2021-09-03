let beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";

let spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";

botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";

numClosedDoors = 3;
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  console.log(choreDoor);
};

let doorImage1 = document.getElementById("door1");
doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
};
let doorImage2 = document.getElementById("door2");
doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
};

let doorImage3 = document.getElementById("door3");
doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
};
