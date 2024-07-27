let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");

let setTime = setInterval(() => {
    let curr_date = new Date();
    

    let hr = curr_date.getHours();
    let min = curr_date.getMinutes();
    let sec = curr_date.getSeconds();


    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    seconds.style.transform = `rotate(${calc_sec}deg)`;

    
},1000);
  