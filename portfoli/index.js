const ELEMENTINPUT = document.getElementById("input");

function numero(signo) {
    ELEMENTINPUT.innerHTML += signo;
    console.log(ELEMENTINPUT.innerHTML);
}

function eualto() {
    ELEMENTINPUT.innerHTML = eval(ELEMENTINPUT.innerHTML);
}

function canc() {
    ELEMENTINPUT.innerHTML = "";
}

function del() {
    ELEMENTINPUT.innerHTML = ELEMENTINPUT.innerHTML.substring(
        0,
        ELEMENTINPUT.innerHTML.length - 1
    );
}
