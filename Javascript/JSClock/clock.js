const secondPin = document.querySelector(".second-hand");
const minPin = document.querySelector(".min-hand");
const hourPin = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondPin.style.transform = `rotate(${secondDegrees}deg`;

    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minPin.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + ((mins/60)*30)+ 90;
    hourPin.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

  setDate();