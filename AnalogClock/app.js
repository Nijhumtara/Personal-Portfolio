const hr_El = document.querySelector(".hr");
const min_El = document.querySelector(".min");
const sec_El = document.querySelector(".sec");

setInterval(() => {
    let date = new Date();

    hour = date.getHours()*30
    min = date.getMinutes()*6
    sec = date.getSeconds()*6

    hr_El.style.transform = `rotateZ(${(hour) + min/12}deg)`;
    min_El.style.transform = `rotateZ(${(min)}deg)`;
    sec_El.style.transform = `rotateZ(${(sec)}deg)`;
})