turtle.speed(10);
turtle.pensize(5);
turtle.color('#6f3d2e');
turtle.penup();
await turtle.forward(200);
await turtle.left(90);
turtle.pendown();
turtle.begin_fill();
await turtle.circle(200,180);
turtle.end_fill();
turtle.begin_fill();
turtle.color('#F1BB93');
await turtle.circle(200,180);
turtle.end_fill();
turtle.begin_fill();
turtle.color('#6f3d2e');
await turtle.right(180);
await turtle.forward(80);
turtle.pendown();
await turtle.right(180);
await turtle.circle(200,180);
await turtle.left(180);
await turtle.forward(80);
await turtle.circle(-200,180);
turtle.end_fill();
turtle.penup();
await turtle.right(90);
await turtle.forward(400);
await turtle.right(90);
await turtle.backward(80);
await turtle.circle(20,210);
turtle.pendown();
await turtle.circle(20,150);
turtle.penup();
await turtle.forward(80);
await turtle.right(90);
await turtle.forward(400);
await turtle.right(90);
await turtle.forward(80);
turtle.pendown();
await turtle.circle(20,150);
turtle.penup();
await turtle.circle(20,210);
await turtle.backward(80);
await turtle.right(90);
await turtle.forward(200);
await turtle.left(90);
await turtle.forward(60);
await turtle.right(90);
await turtle.forward(120);
turtle.pendown();
turtle.dot(40);
turtle.color('black');
turtle.dot(30);
turtle.penup();
await turtle.backward(240);
turtle.pendown();
turtle.color('#6f3d2e');
turtle.dot(40);
turtle.color('black');
turtle.dot(30);
turtle.penup();
await turtle.forward(120);
await turtle.left(90);
await turtle.forward(50);
await turtle.right(90);
await turtle.forward(80);
await turtle.left(110);
turtle.pendown();
turtle.begin_fill();
turtle.color('red');
await turtle.circle(90,140);
turtle.end_fill();
turtle.hideturtle();