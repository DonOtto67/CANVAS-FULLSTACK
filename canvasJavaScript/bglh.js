const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "#00FFFF";
ctx.fillRect(0, 160, 40, 80);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#00FFFF";
ctx.fillRect(360, 180, 40, 40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 75, 75);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(75,75);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(325, 0, 75, 75);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(325,75);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#00FFFF";
ctx.strokeStyle = "blue";
ctx.arc(200, 155, 20, 1.5*Math.PI,4.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.arc(200, 200, 80, 1*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.arc(200, 200, 100, 1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.arc(200, 200, 100, 1.75*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "25px Arial";
ctx.textAlign = "center";
ctx.fillText("Canvas",200,60);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(200,200);
ctx.lineTo(200,400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.fillStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(100, 300, 20, 1*Math.PI,4.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(150, 200, 50, 50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#80C080";
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(0, 320, 40, 80);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(0, 360, 80, 40);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.fillStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(300, 300, 20, 1*Math.PI,4.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(320, 360, 80, 40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(360, 320, 40, 80);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.fillStyle = "#00FFFF";
ctx.arc(200, 400, 45, 1*Math.PI,4.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.arc(200, 400, 65, 1.5*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#80C080";
ctx.arc(200, 400, 85, 1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();