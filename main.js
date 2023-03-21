canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour="blue";

ctx.beginPath();
ctx.colorStroke=colour;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", mousemove);

function mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.client-canvas.offsetTop;

    console.log("X="+ mouse_x + "Y=" + mouse_y);
    circle(mouse_x, mouse_y);

    function circle(mouse_x, mouse_y){
        ctx.beginPath();
        ctx.colorStroke=colour;
        ctx.lineWidth=2;
        ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
    }
