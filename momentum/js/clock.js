
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // 숫자를 문자로 바꾼 뒤, 2글자가 안 되면 앞을 "0"으로 채우는 기능입니다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);