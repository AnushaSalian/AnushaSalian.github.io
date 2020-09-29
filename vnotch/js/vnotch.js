//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;

var p=Math.floor(Math.random()*(5));
var lastp;

var ansDisplay=0, compareVal = 0, qCount = 0, idInput = null, checkUnit = null, textDisplay = null, ans=0, unit=null, noq=false;

function userCalculation(elem, corAns, corUnit)
{
	ans=corAns;
	unit=corUnit;
	ansDisplay++;
	//input text box
	var inputVal = document.createElement("input");
	inputVal.setAttribute("type","text");
	inputVal.setAttribute("id","text"+ansDisplay);
	inputVal.classList.add("inputStyle");
	inputVal.setAttribute("oninput","isANumber(this)");
	
	//check button
	var checkVal = document.createElement("input");
	checkVal.setAttribute("type","button");
	checkVal.setAttribute("id","chk"+ansDisplay);
	checkVal.setAttribute("style","cursor:pointer");
	checkVal.setAttribute("style","margin: 0 5px");
	checkVal.setAttribute("onclick","checkResult(ans,unit)");
	checkVal.setAttribute("value","CHECK");
	
	//right and wrong symbol
	var rightVal = document.createElement("span");
	rightVal.setAttribute("id","rightAns"+ansDisplay);
	rightVal.setAttribute("style","margin: 0 2.5px");
	
	var rightUnit = document.createElement("span");
	rightUnit.setAttribute("id","rightUnit"+ansDisplay);
	rightUnit.setAttribute("style","margin: 0 2.5px");
	
	elem.appendChild(inputVal);
	elem.appendChild(checkVal);
	elem.appendChild(rightVal);
	elem.appendChild(rightUnit);
}
function isANumber(ele)
{
	ele.value = ele.value.match(/\d*(\.\d*)?/)[0];
}
function checkResult(ans,unit)
{
	var idd = document.getElementById("text"+ansDisplay);
	var idd1 = document.getElementById("chk"+ansDisplay);
	var ansId = document.getElementById("rightAns"+ansDisplay);
	var unitId = document.getElementById("rightUnit"+ansDisplay);
	
	compareVal = ans;
	checkUnit = unit;

	if(!idd.value  || !idd.value!=" ")
	{
		alert("Please enter value");
	}
	else if((Math.floor(idd.value * 10000)/10000) != (Math.floor(compareVal * 10000)/10000) || (Math.floor(idd.value * 1000)/1000) != (Math.floor(compareVal * 1000)/1000) || (Math.floor(idd.value * 100)/100) != (Math.floor(compareVal * 100)/100) || (Math.floor(idd.value * 10)/10) != (Math.floor(compareVal * 10)/10))
	{
		qCount++;
		// blinkStop();
		ansId.classList.remove("resultStyle");
		idd.style.borderColor = "red";
		ansId.style.color = "red";
		ansId.innerHTML= "&#10008;";
		if(qCount == 2)
		{
			idd1.value = "RESULT";
		}
		if(qCount == 3)
		{
			idd1.style.visibility = "hidden";
			idd.parentNode.removeChild(idd);
			idd1.parentNode.removeChild(idd1);
			ansId.classList.add("resultStyle");
			ansId.style.color = "black";
			ansId.innerHTML= compareVal;
			unitId.innerHTML= checkUnit;
			goToNextFunction();
		}
	}
	else
	{
		idd1.style.visibility = "hidden";
		idd.parentNode.removeChild(idd);
		idd1.parentNode.removeChild(idd1);
		ansId.classList.add("resultStyle");
		ansId.style.color = "black";
		ansId.innerHTML= compareVal;
		unitId.innerHTML= checkUnit+"&nbsp;&nbsp;<span style='color:green;font-size:20px;'>&#10004;</span>";
		goToNextFunction();
	}
}
function goToNextFunction()
{
	if(noq == true)
	{
		qCount = 0;
		document.getElementById("nextButton").style.visibility = "visible";
	}
	else if(noq == false)
	{
		//resultCount = 1;
		if(simsubscreennum==3)
		{
			qCount = 0;
			setTimeout(function()
			{
				document.getElementById('ap1').style.visibility="visible";
				document.getElementById('can3-12').innerHTML="Theoretical discharge, Q<sub>th</sub> = ";
				document.getElementById('can3-12').style.visibility="visible";
				noq=true;
				idInput = document.getElementById('can3-12');
				userCalculation(idInput, values[p][3], "cm<sup>3</sup>/sec");
			}, 250);
		}
	}
}

function navNext()
{

for (temp = 0; temp <= 7 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}


//Move pointing finger with mouse
$(document).mousemove(function(e)
{

if(simsubscreennum==1 && mpointer==0) 
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('onarm').style.visibility="visible";

 $("#onarm").css({left:e.pageX, top:e.pageY});
}


}

else if(simsubscreennum!=1)
{
	document.getElementById('onarm').style.visibility="hidden";
}


});
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow1').style.visibility=="hidden")
document.getElementById('arrow1').style.visibility="visible";
else
document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{
		if(flag==1)
		{

			document.getElementById('can1on').onclick="";
			document.getElementById('stepnumber').innerHTML="&nbsp;5&nbsp;";
			document.getElementById('pumptext').innerHTML="Stop the pump by pressing the stop button."
			document.getElementById('trial').style="visibility:visible ; left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML="";
			document.getElementById('can1off').onclick=function() { stepstop(); };
		}
		else
		{
			document.getElementById('can1on').onclick=function() { step1(); };
		}
		
	}
	
	else if (simsubscreennum==2)
	{
		refresh1();
		repeat+=1;
		flag=1;
		
		while (p == lastp) 
		{
			p = Math.floor(Math.random() * 5);
		}
		if(repeat==1)
		{
			lastp = p;
		}
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		document.getElementById('can2-2').style.visibility="hidden";
		document.getElementById('can2-3').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 70px; top: 190px; height: 50px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('can2-4').onclick=function() { step2(); };
		
	}
	
	else if (simsubscreennum==3)
	{
		document.getElementById('can2-2').style.visibility="hidden";
		document.getElementById('can2-3').style.visibility="hidden";
		document.getElementById('can3-9').innerHTML="Initial reading (water level till crest) = 3.15 cm";
			
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 190px; height: 50px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-45deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-45deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-45deg)";
			 
		document.getElementById('can3-7').onclick=function() { step3();};
		
	}
	
	else if (simsubscreennum==4)
	{
		
		document.getElementById('can3-11').style.visibility="hidden";
		document.getElementById('can3-12').style.visibility="hidden";
		document.getElementById('ap1').style.visibility="hidden";

		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 315px; top: 390px; height: 50px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		document.getElementById('can4-2').style.visibility="visible";
		document.getElementById('can4-3').style.visibility="hidden";
		
		document.getElementById('can4-2').onclick=function() { step4();};
		
	}

	else if(simsubscreennum==5)
	{
		document.getElementById('can4-10').style.visibility="hidden";
		document.getElementById('can4-2').style.visibility="hidden";
		document.getElementById('can4-3').style.visibility="hidden";
		
		step5();
		if(repeat==3)
		{
			simsubscreennum=0;
		}
		else if(repeat < 3)
		{
			simsubscreennum=1;
		}
		
	}
	
	else if (simsubscreennum==6)
	{
		document.getElementById('step7text1').onclick=function() { step6();}
		
		
	}
	else if (simsubscreennum==7)
	{
	
		
		document.getElementById('can7-7').innerHTML="Slope, n = 2.45" ;
		document.getElementById('can7-8').innerHTML="k = 15" ;
		document.getElementById('can7-9').innerHTML="Coefficient of discharge, C<sub>d</sub> = 0.63" ;
		
		
	}
	
	
}

function step1()
{
	mpointer=1;
	document.getElementById('onarm').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}



function step2()
{
	
	
	myStopFunction();
	
	document.getElementById('can2-2').style.visibility="visible";
	document.getElementById('can2-3').style.visibility="visible";
	
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 670px; top: 190px; height: 50px; z-index: 10;";
			
	document.getElementById("arrow1").style.WebkitTransform = "rotate(-45deg)"; 
		// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(-45deg)"; 
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(-45deg)";
	
	document.getElementById('can2-3').onclick=function() { step2andhalf(); };
	
	
}

function step2andhalf()
{
	myStopFunction();
	
	document.getElementById('can2-3').style.transformOrigin = "14% 15%";
	document.getElementById('can2-3').style.animation = "valveturn-4 1.5s forwards ";
	
	setTimeout(function()
	{
		document.getElementById('nextButton').style.visibility="visible";
	
	}, 1600);
}


function step3()
{
	
myStopFunction();
	setTimeout(function(){
	document.getElementById("can3-13").style.animation = "water-5 1.5s 1 forwards";
	
	}, 1000);
	
	setTimeout(function(){
	document.getElementById("can3-3").style.animation = "myhook-2 2s 1  forwards";
	
	step3andhalf();
	
	}, 2700);
}

function step3andhalf()
{
	setTimeout(function()
	{
	
		document.getElementById('can3-10').innerHTML="Final reading = "+values[p][1] +" cm" ;
		document.getElementById('can3-11').innerHTML="Head of water, H =";
		setTimeout(function(){
			document.getElementById('can3-11').style.visibility="visible";
			noq=false;
			idInput = document.getElementById('can3-11');
			userCalculation(idInput, values[p][2], "cm");
		}, 500);
	
	}, 3000);
}

function step4()
{
	myStopFunction();
	document.getElementById('can4-2').style.visibility="hidden";
	document.getElementById('can4-3').style.visibility="visible";
	setTimeout(function(){
	document.getElementById("can4-7").style.animation = "water0 2.5s forwards";
	document.getElementById("stopwatchndl").style.transformOrigin = "50% 90%";
	document.getElementById("stopwatchndl").style.animation = "valveturn-5 2.5s forwards";
	}, 500);
	
	setTimeout(function(){
	document.getElementById('can4-9').innerHTML="Time required by water to fill 10cm height ="+values[p][5] +" sec" ;
	setTimeout(function()
	{
		document.getElementById('can4-10').innerHTML="Discharge of water, Q<sub>act</sub> = ";
		document.getElementById('can4-10').style.visibility="visible";
		noq=true;
		idInput = document.getElementById('can4-10');
		userCalculation(idInput, values[p][6], "cm<sup>3</sup>/sec");
	},500);			
	
	}, 2600);
}

function step5()
{
	document.getElementById('can6-3').innerHTML="Theoretical discharge, Q<sub>th</sub> = "+values[p][3] + " cm<sup>3</sup>/sec";
	document.getElementById('can6-4').innerHTML="Actual discharge, Q<sub>act</sub> = "+values[p][6] +" cm<sup>3</sup>/sec" ;
	
	setTimeout(function()
	{
		noq=true;
		idInput = document.getElementById('can6-5');
		userCalculation(idInput, values[p][7], "");

	}, 500);
	
	
}
function step6()
{
	$("#chartContainer").ejChart(
    {		
		primaryXAxis:
		{
			valueType: "logarithmic",
			minorTicksPerInterval: 5,
			range: { min: 1, max: 10, interval: 1 },
			majorGridLines: { width: 1.5, opacity: 0.8 },
			minorGridLines:{ visible: true },
			minorTickLines:{ width: 1, size: 4, visible: true },
			title: { text: 'Head' },
			labelFormat:'{value}'
		},   
		 primaryYAxis:
		{
			valueType: "logarithmic",
			minorTicksPerInterval: 4,
			range: { min: 1, max: 10000, interval: 1 },
			majorGridLines: { width: 1.5, opacity: 0.8 },
			minorGridLines:{ visible: true },
			minorTickLines:{ width: 1, size: 4, visible: true },
			title: { text: 'Actual Discharge' },
			labelFormat:'{value}'
		}, 
		
		//Initializing Series
		
		series: 
		[ 
			{
				points:[{ x: values[0][2], y: values[0][6]}, 
						{ x: values[1][2], y: values[1][6]},
						{ x: values[2][2], y: values[2][6]},
						{ x: values[3][2], y: values[3][6]},
						{ x: values[4][2], y: values[4][6]},
						{ x: values[5][2], y: values[5][6]}
						],
				type: 'line',
				border :{width:5},
				tooltip:{visible:true},
				marker:{
					shape: 'circle',
					size:
					{
						height: 5, width: 5
					},
					visible: true
				},					
				enableAnimation :true
			},
			{
				points:
				[
						{ x: 1, y: 15 },
						{ x: values[5][2], y: values[5][6]}
				],
				type: 'line',
				fill: "#0066FF",
				border :{width:5},
				tooltip:{visible:true},
				marker:{
					shape: 'circle',
					size:
					{
						height: 5, width: 5
					},
					visible: true
				},					
				enableAnimation :true
			}
		],
		
		load:"loadTheme",
		isResponsive: true,
		
		legend:{visible:false}
	});
		
	setTimeout(function()
	{
		document.getElementById('nextButton').style.visibility="visible";
	
	}, 2000);
	
}


function stepstop()
{
	if(flag!=1){
		console.log("if "+flag);
		document.getElementById('nextButton').style.visibility="hidden";	
	}
	else
	{
		simsubscreennum=5;
		document.getElementById('nextButton').style.visibility="visible";
	}
	
}

function refresh1()
{
	document.getElementById('can2-3').style.transformOrigin = "";
	document.getElementById('can2-3').style.animation = "";
	
	document.getElementById("can3-13").style.animation = "";
	document.getElementById("can3-3").style.animation = "";

	document.getElementById('can3-10').innerHTML="Final reading = ";
	document.getElementById('can3-11').innerHTML="Head of water = ";
	document.getElementById('can3-12').innerHTML="Theoretical discharge, Q<sub>act</sub> = ";
	document.getElementById('can4-9').innerHTML="Time required by water to fill 10cm height =";
	document.getElementById('can4-10').innerHTML="Discharge of water = ";
	document.getElementById("can4-7").style.animation = "";
	document.getElementById('can6-5').innerHTML="";
	document.getElementById('nextButton').style.visibility="hidden";	
}