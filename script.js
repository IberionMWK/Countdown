const insertDate = '2022-06-23 15:20:00';
const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const countDownDate = new Date(insertDate).getTime();

const counter = () => {
  const currDate = new Date().getTime();
  const distance = countDownDate-currDate;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElem.innerHTML = days;
  hoursElem.innerHTML = twoDigits(hours);
  minutesElem.innerHTML = twoDigits(minutes);
  secondsElem.innerHTML = twoDigits(seconds);

}

const twoDigits = (time) => {
  return time < 10 ? `0${time}` : time
}

counter()
setInterval(counter, 1000);