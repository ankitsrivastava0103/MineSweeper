let gameStatus = false;
let count = 0;

let array = [];
for (let i = 1; i <= 81; i++) {
  array.push(i);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let randomArray = shuffle(array).slice(0, 10);
console.log(randomArray);

let status = (v) => {
  if (count === 71) {
    document.getElementById("status").innerHTML =
      "Congratulations!!! You Won !!!";
  }
  if (gameStatus === true && count < 71) {
    for (let i = 0; i < 10; i++) {
      document.getElementById(randomArray[i].toString()).style.backgroundColor =
        "red";
    }
    document.getElementById("status").innerHTML =
      "Sorry you Lost. Refresh to play again.";
  }
};

let handleClick = (event) => {
  let getClassList = event.target.classList;
  if (
    gameStatus === true ||
    getClassList[0] === "game" ||
    getClassList[1] === "clicked"
  ) {
    return;
  } else {
    getClassList.add("clicked");
    count++;
    status();
    let idi = event.target.id;
    let value = randomArray.includes(Number(idi));
    if (value === true) {
      gameStatus = true;
      status();
    } else {
      document.getElementById(idi).style.backgroundColor = "green";
    }
  }
};

document.getElementById("game").addEventListener("click", handleClick);
