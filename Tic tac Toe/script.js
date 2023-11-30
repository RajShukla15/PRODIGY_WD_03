let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
    if (!gameActive || board[index] !== '') return;

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (board.every(cell => cell !== '')) {
        document.getElementById('result').innerText = "It's a draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== '' && board[a] === board[b] && board[b] === board[c];
    });
}
