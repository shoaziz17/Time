function showTime() {
  const myDate = new Date();
  const hour = myDate.getHours();
  const minute = myDate.getMinutes();
  const second = myDate.getSeconds();
  const timezone = document.querySelector(".timezone");
  const body = document.querySelector("body");
  const zero = document.querySelector("#zero");
  const zeroMinute = document.querySelector("#zero-minute");
  const zeroHour = document.querySelector("#zero-hour");
  if (second < 10) {
    zero.innerHTML= `
    <h1>0</h1>
    `
  }else{
    zero.innerHTML= `
    `
  }

//   Zero minute logic
if (minute < 10) {
    zeroMinute.innerHTML= `
    <h1>0</h1>
    `
  }else{
    zeroMinute.innerHTML= `
    `
  }

  if (hour >= 12) {
    timezone.innerHTML = "PM";
  } else {
    timezone.innerHTML = "AM";
  }

  if (hour < 12) {
    body.classList.add("bg-white");
  } else {
    body.classList.add("bg-black");
  }

  document.querySelector(".hour").innerHTML = hour;
  document.querySelector(".minute").innerHTML = minute;
  document.querySelector(".second").innerHTML = second;
}

setInterval(showTime, 10);
