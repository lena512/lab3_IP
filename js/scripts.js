
function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function startAutoScroll(id) {
    const scrollDiv = document.getElementById(id);
    const step = scrollDiv.scrollHeight * 0.1; 
    let isScrolling = false;
    const intervalId = setInterval(() => {
        const maxScroll = scrollDiv.scrollHeight - scrollDiv.clientHeight;

        if (scrollDiv.scrollTop >= maxScroll) {
            scrollDiv.scrollTop = 0;
            return;
        }
        scrollDiv.scrollBy({
            top: step,
            behavior: 'smooth'
        });
    }, 5000);
}


function digitalClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
        document.getElementById("id_clock").innerHTML = hours + ":" + minutes + ":" + seconds;
        setTimeout("digitalClock()", 1000);
   }

window.changeColor = changeColor;
window.onload = function() {
    digitalClock();
    startAutoScroll('scr3');
};