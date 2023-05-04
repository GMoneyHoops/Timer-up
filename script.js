let Container = document.querySelector('#Container');
function onClick() {
    clicks += 1;
    let TimerId // 
    if (clicks= 1) {
      clearInterval(downloadTimerId);
      time_seconds = 0;
      document.getElementById("TimerId").style.color = "#ff0000";
    } else {
        var time_seconds = 0;
        downloadTimerId = setInterval(function {
          document.getElementById("TimerId").innerHTML = time_seconds;
          time_seconds += 1;
        }, 1000);
  }};