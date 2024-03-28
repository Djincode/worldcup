let MatchDay = new Date("06/11/2026");
let Today = new Date();
let time = MatchDay.getTime() - Today.getTime();
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const updater = ()=>{
    days.innerText =  Math.floor(time / (1000 * 60 * 60 * 24));
    hours.innerText=  Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerText = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerText = Math.floor((time % (1000 * 60)) / 1000);

}
updater()


