var ptx = [];
var pty = [];
var gridSizeX=35;
var gridSizeY=55;
var pa=1;
var cnt=0,c=0;
var pauseTime; 
var canvas;
var ctx;

function varinit()
{
	varchange();
	$('#paslider').slider("value", 1);
	$('#paspinner').spinner("value", 1);
}

function startsim(){
	pauseTime=setInterval("varupdate();",'100'); 
}

function varchange()
{
	//console.log(" varchange",cnt++);
	$('#paslider').slider({ max : 4, min : 0.5, step : 0.5 });		
	$('#paspinner').spinner({ max : 4, min : 0.5, step : 0.5 });		

	$( "#paslider" ).on( "slide", function( e, ui ) { $('#paspinner').spinner("value",ui.value); ptx=[]; pty=[]; j = 0 ;} );
	$( "#paspinner" ).on( "spin", function( e, ui ) { $('#paslider').slider("value",ui.value); ptx=[]; pty=[]; j=0;} );
	$( "#paspinner" ).on( "change", function() {  varchange() } );
	varupdate();
}

function varupdate()
{
	//console.log("varupdate",c++);
	$('#paslider').slider("value", $('#paspinner').spinner('value'));
    pa=$('#paspinner').spinner("value");
	//console.log(pa);
	draw();
}

function draw()
{
	canvas = document.getElementById("simscreen");
	ctx = canvas.getContext("2d");
	
	var w=canvas.width;
	var h=canvas.height;

	ctx.clearRect(0,0,w,h);
	var num_lines_x=Math.floor(h/gridSizeX);
	var num_lines_y=Math.floor(w/gridSizeY);
	
	//x axis
	for(i=0; i<=num_lines_x - 3; i++)
	{
		ctx.beginPath();
		ctx.moveTo(100,75+(gridSizeX*i));
		ctx.lineTo(322.5,75+(gridSizeX*i));
		if(i==num_lines_x - 3 || i==0)
		{
			ctx.lineWidth=2;
			ctx.strokeStyle="#000000";
		}
		else
		{
			ctx.lineWidth=2;
			ctx.strokeStyle="#A9A9A9";
		}
		ctx.stroke();
	}
	
	//y axis
	for(i=0; i<=num_lines_y - 6; i++)
	{
		ctx.beginPath();
		ctx.moveTo(101+(gridSizeY*i),75);
		ctx.lineTo(101+(gridSizeY*i),355);
		if(i==num_lines_y - 6 || i==0)
		{
			ctx.lineWidth=2;
			ctx.strokeStyle="#000000";
		}
		else
		{
			ctx.lineWidth=2;
			ctx.strokeStyle="#A9A9A9";
		}
		ctx.stroke();	
	}
	
	ctx.save();
	ctx.translate(80,325.5);
	ctx.rotate(-Math.PI/2);
	ctx.font="18px Century Gothic";
	ctx.fillText("Transmisibility level [dB]",90,-20);
	ctx.restore();
	
	ctx.font="18px Century Gothic";
    ctx.fillText("Frequency ratio",200,390);
	
	//to display the points
	var x_axis_starting_point={ number : 25, suffix : '' };
	var y_axis_starting_point={ number : 10, suffix : '' };
	
	 //numbering x axis
	for(var i=0;i<5;i++)
	{
		ctx.font="10pt Century Gothic";
		ctx.fillStyle="#000000";
		ctx.textAlign="center";
		ctx.fillText(x_axis_starting_point.number*i, 101+(gridSizeY*i), 370);
		ctx.fill();
	}

	//numbering y axis
	for(var i=0;i<9;i++)
	{
		ctx.font="10pt Century Gothic";
		ctx.fillStyle="#000000";
		ctx.textAlign="center";
		if(i==0)
			ctx.fillText(y_axis_starting_point.number*i,87.5,77.5+(gridSizeX*i));
		else 
			ctx.fillText(-(y_axis_starting_point.number*i),87.5,77.5+(gridSizeX*i));
		ctx.fill();
	}

	ptx.push(322.5);
	pty.push(75+((pa*20)*7.02));
	plotGraph(ctx,ptx,pty);
}

function plotGraph(ctx,ptx,pty)
{

		console.log(ptx,pty);
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(101,75);
		ctx.lineTo(322.5,75+((pa*20)*7.02));
		ctx.strokeStyle="red";
		ctx.stroke();
		
		ctx.font="10pt Century Gothic";
		ctx.fillStyle="#000000";
		var oct = 20*pa*0.3;
		var dec = 20*pa;
		var val = oct +"[dB/oct] = "+ dec+"[dB/dec]"; 
		ctx.fillText(val, 400,75+((pa*20)*7.1));
		ctx.fill();

}

//ctx.lineTo(322.5,355); (-80)