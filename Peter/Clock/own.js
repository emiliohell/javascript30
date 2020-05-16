const hour = document.getElementById("hour-hand");
const minute = document.getElementById("minute-hand");
const second = document.getElementById("second-hand");

function seconds() {
    let getDate = new Date();
    let getSeconds = getDate.getSeconds();
    let getMinutes = getDate.getMinutes();
    let getHours = getDate.getHours();

    return {
        first: getSeconds,
        second: getMinutes,
        third: getHours,
    }
}



setInterval(secondHand, 1000);
function secondHand() {
    var values = seconds();
    let setSeconds = values.first;
    let setMinutes = values.second;
    let setHours = values.third;
    second.style.transform = "rotate(" + (setSeconds * 6) + "deg)" + "translate(-50%,-100%)"; 
    minute.style.transform = "rotate(" + (setMinutes * 6) + "deg)" + "translate(-50%,-100%)"; 
    hour.style.transform = "rotate(" + (setHours * 30) + "deg)" + "translate(-50%,-100%)"; 
   
}




















