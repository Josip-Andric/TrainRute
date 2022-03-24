let url = "https://api.deutschebahn.com/freeplan/v1/arrivalBoard/8000013?date=2022-03-24T19%3A00";
let trip =
fetch("https://api.deutschebahn.com/freeplan/v1/arrivalBoard/8000013?date=2022-03-24T19%3A00"
)
.then((response)=>response.json())
.then((data) => console.log(data));






console.log("Banana");
