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
document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year + "<br>" +
hours + ":" + minutes;


document.getElementsById("demo").innerHTML = "Banana";
