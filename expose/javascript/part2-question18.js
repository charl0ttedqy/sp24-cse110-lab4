function printTime(){
  let d = new Date();
  let time = d.toLocalTimeString();
  console.log(time);
}
setInterval(printTime, 1000);
