const clock = document.querySelector("#js-clock");

function getClockAndTime() {
    today = new Date();

    const date = String(today.getUTCDate()).padStart(2, "0");
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    //   
    //   clock.innerText = ` ${hours}:${minutes}:${seconds}`;
    clock.innerText = ` ${today.getFullYear()}, ${today.getUTCMonth() + 1}, ${date}, ${hours}:${minutes}:${seconds}`
}

getClockAndTime();

setInterval(getClockAndTime, 1000);