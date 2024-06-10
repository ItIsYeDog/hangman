let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || [];
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
let startTime;
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
const extraChars = ['æ', 'ø', 'å'];

const endreNavn = document.getElementById('endre-navn');

endreNavn.addEventListener('click', () => {
    localStorage.removeItem('playerName');
    location.reload();
});


document.addEventListener('DOMContentLoaded', (event) => {
    const playerNameInput = document.getElementById('player-name');
    const saveNameButton = document.getElementById('save-name');
    const nameModal = document.getElementById('name-modal');

    const savedName = localStorage.getItem('playerName');

    if (savedName) {
        nameModal.style.display = 'none';
    } else {
        nameModal.style.display = 'block';
    }

    saveNameButton.addEventListener('click', () => {
        const name = playerNameInput.value;

        if (!name.trim()) {
            alert('Please enter a name.');
            return;
        }

        localStorage.setItem('playerName', name);
        nameModal.style.display = 'none';
    });
});

function calculatePoints(word, timeInSeconds) {
    const timeInMinutes = Math.floor(timeInSeconds / 60);
    return Math.max(0, word.length - timeInMinutes);
}

function addScore(points) {
    const playerName = localStorage.getItem('playerName');
    const playerScore = scoreboard.find(score => score.name === playerName);

    if (playerScore) {
        playerScore.points += points;
    } else {
        scoreboard.push({ name: playerName, points: points });
    }

    localStorage.setItem('scoreboard', JSON.stringify(scoreboard));
}

function showScoreboard() {
    const scoreboardTable = document.getElementById('scoreboard');
    scoreboardTable.innerHTML = '';

    
    scoreboard.sort((a, b) => b.points - a.points);
    let topFiveScores = scoreboard.slice(0, 5);

    
    topFiveScores.forEach((score, index) => {
        let row = scoreboardTable.insertRow(index);
        let nameCell = row.insertCell(0);
        let scoreCell = row.insertCell(1);

        nameCell.textContent = score.name;
        scoreCell.textContent = score.points;
    });
}
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "img/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; 
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
    startTime = new Date();
}
function gameOver (isVictory) {
    const endTime = Date.now();
    const timeInSeconds = Math.floor((endTime - startTime) / 1000);
    if (isVictory) {
        const points = calculatePoints(currentWord, timeInSeconds);
        addScore(points);
    }
    showScoreboard();
    const modalText = isVictory ? `Du fant ordet:` : 'Det riktige ordet var:';
    gameModal.querySelector("img").src = `img/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Gratulerer!' : 'Spillet er over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}
const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `img/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}
for (let i = 0; i < extraChars.length; i++) {
    const button = document.createElement("button");
    button.innerText = extraChars[i];
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, extraChars[i]));
}
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
document.addEventListener('DOMContentLoaded', showScoreboard);
