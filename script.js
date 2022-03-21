function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
hours = addZero(date.getHours());
minutes = addZero(date.getMinutes());
document.getElementById("current_time").innerHTML = day + "/" + month + "/" + year + "<br>" +
hours + ":" + minutes;
