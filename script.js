var timesClicked = 0;

$("#Container").click(function() {
    clicks++;

    if (clicks>1) {
    Container.addEventListener('click', function() {
    document.getElementById("TimerId").innerHTML = "Stopped";
    })}
})