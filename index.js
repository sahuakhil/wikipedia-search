let count = 10;
let entervalEl = setInterval(function() {
    count = count - 1;
    timecountEl.textContent = count;
    if (count === 0) {
        timecountEl.textContent = "BOOM!!";
        clearInterval(entervalEl);
    }

}, 1000);

let timecountEl = document.getElementById("timeCount");
let defuserEl = document.getElementById("defuser");

defuserEl.addEventListener("keydown", function(event) {
    let bomb = defuserEl.value;
    if (event.key === "Enter" && bomb === "defuse" && count !== 0) {
        timecountEl.textContent = "You Did IT !!!";
        clearInterval(entervalEl);
    }
});