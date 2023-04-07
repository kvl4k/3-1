enum Button {
    PLUS = "plus",
    MINUS = "minus"
}

let clicks = {plus: 0, minus: 0};

function click(button: Button) {
    const data = {button};

    console.log(data);

    fetch('http://localhost:3000/api/click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            clicks = data;
            showClicks();
        });
}

function showClicks() {
    let elem = document.getElementById('label');
    if (elem !== null) {
        elem.innerHTML = 'Plus: ' + clicks.plus + ', Minus: ' + clicks.minus;
    }
}

let plusButton = document.getElementById("+");
let minusButton = document.getElementById("-");

if (plusButton) {
    plusButton.addEventListener('click', () => {
        click(Button.PLUS);
    });
}

if (minusButton) {
    minusButton.addEventListener('click', () => {
        click(Button.MINUS);
    });
}

showClicks();
