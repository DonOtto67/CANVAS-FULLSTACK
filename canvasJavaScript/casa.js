const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#808080";
ctx.fillRect(0, 300, 400, 100);

ctx.beginPath();
ctx.fillStyle = "#86471A";
ctx.fillRect(150, 200, 100, 100);
ctx.closePath();

ctx.beginPath ();
ctx.fillStyle = "#F5694D";
ctx.moveTo(150, 200);
ctx.lineTo(250, 200);
ctx.lineTo(200, 150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(320, 80, 40, 0, Math.PI * 2);
ctx.fillStyle = "#FCFF2D";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#47BDFD";
ctx.fillRect(160, 220, 30, 30)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#47BDFD";
ctx.fillRect(210, 220, 30, 30)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#5A2D0C";
ctx.fillRect(190, 250, 20, 50)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#458EFC";
ctx.arc(0, 300, 40, 1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#458EFC";
ctx.fillRect(0, 300, 40, 100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#458EFC";
ctx.arc(150, 400, 40, 1*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#458EFC";
ctx.fillRect(0, 360, 150, 40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#5A2D0C";
ctx.fillRect(45, 235, 20, 65)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#318A26";
ctx.arc(55, 235, 30, 1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#5A2D0C";
ctx.fillRect(350, 285, 20, 70)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#318A26";
ctx.arc(360, 285, 30, 1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.closePath();