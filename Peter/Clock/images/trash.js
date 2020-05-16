const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
console.log(secondHand);



function seconds() {
    const date = new Date();
    const getSecond = date.getSeconds();
    return getSecond;
    // console.log(getSecond)
}

setInterval(secondDegrees, 1000)
function secondDegrees() {
   i = seconds();
   
   
   secondHand.style.transform = "rotate(" + (i * 6) + "deg)" + "translate(-50%,-100%)"; 
   console.log(i);
}   
   












// function seconds() {
//     x = second.toLocaleString();
//     console.log(seconds())

//  }


//  setInterval(function(){ alert("Hello"); }, 3000);


// loop för getSeconds 1-60 === loop för getDegrees 1-60

//

//setInterval (loop / time)


// setInterval(function(){

// }, 1000);


