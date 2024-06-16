let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let turn0 = true;

let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 7],
];

const resetGame = () => {
  true0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.classList.add("color");
      box.innerText = "O";

      count++;
      turn0 = false;
    } else {
      box.innerText = "X";
      count++;
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (pos1) => {
  msg.innerText = `Congratulation ,Winner is ${pos1}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};
const shownoWinner = (pos1) => {
  msg.innerText = `Match is draw`;
  msgcontainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
      if (count === 9) {
        shownoWinner();
      }
    }
  }
};
newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
