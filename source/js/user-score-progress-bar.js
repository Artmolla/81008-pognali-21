let circles = document.getElementsByClassName('user-score__progress-ring__circle');
let usersScore = document.getElementsByClassName('user-score__score');
const radius = circles[0].r.baseVal.value;
const circumference = radius * 2 * Math.PI;


for (let i = 0; i < circles.length; i++) {
  circles[i].style.strokeDasharray = `${circumference} ${circumference}`;
  circles[i].style.strokeDashoffset = `${circumference}`;
  circles[i].style.strokeDashoffset = circumference - (+usersScore[i].textContent) / 100 * circumference;
}
