var link = document.getElementById("link");
var interval = document.getElementById("interval");
console.log(link);

function start() {
    setInterval(function(){
        console.log("opening the link...")
        window.open(link.value);
    },parseInt(interval.value));
}
// prenotami.esteri.it/Services/Booking/2342