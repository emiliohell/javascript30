function getTime() {
  var time = new Date();
  var hour = time.getHours() + 2;
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  console.log(time);

  // console.log(hour + ":" + minutes + ":" + seconds);

  document.getElementById("s-arm").style.transform =
    "rotate(" + seconds * 6 + "deg)";
  document.getElementById("m-arm").style.transform =
    "rotate(" + minutes * 6 + "deg)";
  document.getElementById("h-arm").style.transform =
    "rotate(" + hour * 30 + "deg)";
  // (document.getElementById("time").innerHTML =
  //   hour + ":" + minutes + ":" + seconds)

  setTimeout(getTime, 1000);
}

getTime();
