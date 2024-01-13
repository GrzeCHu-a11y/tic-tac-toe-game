const box = document.querySelectorAll(".box");

const winVariants = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let currentPlayer = "X";

let round = 1;


const start = (e) => {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    e.target.innerHTML = currentPlayer;
    checkWinner()
}

const checkWinner = () => {
    for (let index = 0; index < winVariants.length; index++) {
        const variant = winVariants[index];
        const a = box[variant[0]].innerHTML;
        const b = box[variant[1]].innerHTML;
        const c = box[variant[2]].innerHTML;

        if (a !== "" && a === b && b === c) {
            alert(`Player ${a} wins!`); 
            box.forEach((box) => box.innerHTML = "")
        }
    }
}

box.forEach((box) => box.addEventListener("click", start));