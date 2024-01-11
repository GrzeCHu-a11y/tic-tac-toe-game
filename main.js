const box = document.querySelectorAll(".box");

const winVariants = [
    [1,2,3],
    [3,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

let currentPlayer = "X";

let round = 1;


const start = (e) => {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    e.target.innerHTML = currentPlayer;
}



box.forEach((box) => box.addEventListener("click", start));