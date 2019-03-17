var canvas = new fabric.Canvas("myCanvas");
canvas.setHeight(1000);
canvas.setWidth(1200);





// create a rectangle object
var boxA = new fabric.Rect({
  left: 50,
  top: 50,
  width: 100,
  height: 100,
  strokeWidth: 2,
  stroke: "#000",
  fill: "#FFF",
});

canvas.add(boxA);


// create a rectangle object
var boxB = new fabric.Rect({
  left: 250,
  top: 50,
  width: 100,
  height: 100, 
  strokeWidth: 2,
  stroke: "#000",
  fill: "#FFF",
});
canvas.add(boxB);


	var ab = new Connector(canvas, boxA, 'right', boxB, 'left');



// create a rectangle object
var boxC = new fabric.Rect({
  left: 50,
  top: 250,
  width: 100,
  height: 100,
  strokeWidth: 1,
  stroke: "#000",
  fill: "#FFF",
});

canvas.add(boxC);


// create a rectangle object
var boxD = new fabric.Rect({
  left: 250,
  top: 350,
  width: 100,
  height: 100, 
  strokeWidth: 1,
  stroke: "#000",
  fill: "#FFF",
});
canvas.add(boxD);



// canvas.add(new fabric.Path('M50,300L20,400L20,480L180,480L180,400L250,400',{
//     stroke: 'black',
//     fill: '',
//     strokeWidth: 4
// }));


var cd = new Connector(canvas, boxC, 'right', boxD, 'left');

// create a rectangle object
var boxE = new fabric.Rect({
  left: 450,
  top: 50,
  width: 100,
  height: 100, 
  strokeWidth: 1,
  stroke: "#000",
  fill: "#FFF",
});
canvas.add(boxE);

// create a rectangle object
var boxF = new fabric.Rect({
  left: 650,
  top: 50,
  width: 100,
  height: 100, 
  strokeWidth: 1,
  stroke: "#000",
  fill: "#FFF",
});
canvas.add(boxF);

	var ef = new Connector(canvas, boxE, 'left', boxF, 'right');

// create a rectangle object
var boxG = new fabric.Rect({
  left: 450,
  top: 250,
  width: 100,
  height: 100, 
  strokeWidth: 1,
  stroke: "#000",
  fill: "#FFF",
});
canvas.add(boxG);

// create a rectangle object
var boxH = new fabric.Rect({
  left: 650,
  top: 250,
  width: 100,
  height: 100, 
  strokeWidth: 1,
  stroke: "#000",
  fill: "#FFF",
});
canvas.add(boxH);

	var gh = new Connector(canvas, boxG, 'left', boxH, 'left');
