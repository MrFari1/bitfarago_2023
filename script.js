const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var show = new Array();
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 10);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  const grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#000');
  grad.addColorStop(0.5, '#6E6D6D'); //kulso kor
  grad.addColorStop(1, '#333');
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#3A3A3A'; //belso resz
  ctx.fill();
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = 'white'; //szamok
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(let num = 1; num < 13; num++){
    let ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function popup(button) {
  show.length>0?vmi2():vmi(button);
  console.log(show.length);
}

function vmi2(){
  console.log("ada");
 show.forEach(e => {
    if(e.classList.contains("show"))
      e.classList.toggle("show");
      console.log(e);
  });
  show = [];
}

function vmi(button){
  console.log("dsadsa");
  let id=String(button.id)
  id=id.slice(5)
  var popup=document.getElementById(id)
  popup.classList.toggle("show");
  show = document.querySelectorAll("span[class ='popuptext show']");
  console.log(show);
}
function imgshow(){
  document.getElementById("btncheck1").checked==true ? document.getElementById("imageslider").hidden=false:document.getElementById("imageslider").hidden=true;
}

var ckik = document.getElementById("ckik");
ckik.addEventListener("click", function() {
    window.open("https://ckik.hu", "_blank");
});
