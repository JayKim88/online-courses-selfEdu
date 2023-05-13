var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
c.fillRect(100, 100, 50, 50);
c.fillRect(200, 300, 100, 50);
c.fillRect(400, 600, 100, 50);
