const colors = ['Green', 'Yellow', 'Blue', 'Red', 'Blue', 'Red', 'Green', 'Yellow', 'Yellow', 'Red', 'Blue', 'Green'];
const words = ['Black', 'Moon', 'Earth', 'Red', 'Blue', 'Sky', 'Cat', 'Banana', 'Green', 'Dog', 'Lemon', 'Pink', 'Apple', 'Orange', 'Sea', 'White', 'Leaf', 'Lucky'];
let time = 30;
let color;
let word;
let true_count = 0;
let false_count = 0;
let right_choice = new Audio("right.unknown");
let wrong_choice = new Audio("wrong.unknown");

function Timer() {
    const timeInterval = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector('#result').innerHTML = `<p>${time} s</p>`;
        }
        else {
            clearInterval(timeInterval);
            document.querySelector('#tail').style.display = "none";
            document.querySelector('#result').textContent = "Refresh The Page For Play Again";
            document.querySelector('#middle').innerHTML = `<p>Good = ${true_count}</p> <p>Bad = ${false_count}</p> <p>Score = ${true_count - false_count}</p>`
            document.querySelector('#middle').style.color = "#fff";
        }
    }, 1000);
}

function generateWord() {
    const ran_col = Math.floor(Math.random() * 12);
    const ran_word = Math.floor(Math.random() * 17);
    color = colors[ran_col];
    document.querySelector('#middle').textContent = `${words[ran_word]}`;
    document.querySelector('#middle').style.color = `${colors[ran_col]}`;
}

function checkResult() {
    document.querySelector('#tail').addEventListener('click', (e) => {
        const clicked_color = e.target.textContent;
        if (clicked_color === color) {
            right_choice.play();
            true_count++;
            generateWord();
        } else {
            wrong_choice.play();
            false_count++;
            generateWord();
        }
    });
}

Timer();
generateWord();
checkResult();
