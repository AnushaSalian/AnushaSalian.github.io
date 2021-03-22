//Trial No., Weight of moisture can,(w1)(g), Weight of moisture can+wet soil(w2)g, Weight of moisture can + dry soil(w3)g
var dataset=[[1,7.78,16.39,15.28],
			[2,7.83,13.43,12.69],
			[3,15.16,21.23,20.43]];
var cnt=0;
var repeat=0;

var p=0;
var d=".00";
var data=0;
function IsInt(num)
{
	if(Number.isInteger(num))
	{
		data=num+d;
	}
	else
	{
		data=num;
	}
}

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

var questions=["In plastic limit test, a thread of the soil is rolled to a diameter of ______ mm.",
				"In the plastic limit test, _______ gm of the soil sample is taken for the experiment.",
				"The plastic limit is the water content where the soil starts to exhibit plastic behavior.",
				"The Consistency index is defined as the ratio of the difference between the liquid limit and the natural water content to the ______of the soil.",
				"Plasticity index for sand is _______."];
var options2=[["4","2","3","5"],//3
			  ["20","30","35","40"],//20
			  ["True","False"],//True   
			  ["Liquidity index","Plasticity index","Shrinkage index","None of the above"],//Plasticity index
			  ["2","1","0","None of the above"]];//0

function validateFormativeQA(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

function generate_table() 
{
	var j=0;
    var table = document.getElementById("dataTable");
    for(var i=2;i>=0;i--)
    {
			$("#dataTable").delay()
            .queue(function (generate_table) {
            $(this).append("<tr><td>" + dataset[j][0] + "</td><td>" + dataset[j][1] + "</td><td>"+dataset[j][2]+"</td><td>"+dataset[j][3]+"</td><td>"+(dataset[j][2] - dataset[j][3]).toFixed(2)+"</td><td>"+(dataset[j][3] - dataset[j][1]).toFixed(2)+"</td><td>" + ((dataset[j][2] - dataset[j][3]) /(dataset[j][3] - dataset[j][1])*100).toFixed(2)+ "</td></tr>");
			j++;
            generate_table();
        });
	}
}

function navNext()
{
	for(temp=0;temp<=14;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		repeat+=1;
		//refresh();
		 document.getElementById('mark1').style.visibility="hidden";
		 document.getElementById('mark2').style.visibility="hidden";
		 document.getElementById('mark3').style.visibility="hidden";
		 document.getElementById('1-1').style.visibility="visible";
		 document.getElementById('1-3').style.visibility="visible";
		 // document.getElementById('trial').style="visibility:visible; left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 // document.getElementById('trial').innerHTML="Trial : " + repeat;
		 
		setTimeout(function()
		{
			blinkArrow(277.5,490,90,30);
			document.getElementById("1-1").onclick=function()
			{
				myStopFunction();
				document.getElementById("1-1").onclick="";
				document.getElementById("1-1").style.visibility="hidden";
				document.getElementById("1-0").style.backgroundColor="lightgrey";
				setTimeout(function()
				{
					document.getElementById("1-2").style.visibility="visible";
					document.getElementById("p1-1").innerHTML="000.10";
					setTimeout(function()
					{
						blinkArrow(285,180,360,40);
						document.getElementById("1-2").onclick=function()
						{
							myStopFunction();
							document.getElementById("1-2").onclick="";
							document.getElementById("1-2").style.animation="movePlate 1.5s forwards";
							setTimeout(function()
							{
								blinkArrow(387.5,490,90,30);
								document.getElementById("1-3").onclick=function()
								{
									myStopFunction();
									document.getElementById("1-3").onclick="";
									document.getElementById("1-3").style.visibility="hidden";
									document.getElementById("p1-1").innerHTML="000.00";
									setTimeout(function()
									{
										document.getElementById("1-4").style.visibility="visible";
										blinkArrow(630,190,360,40);
										document.getElementById("1-4").onclick=function()
										{
											myStopFunction();
											document.getElementById("1-4").onclick="";
											document.getElementById('1-4').style.transformOrigin = "100% 80%";
											document.getElementById('1-4').style.animation = "rotateSieve 1.5s forwards ";
											setTimeout(function()
											{
												document.getElementById('1-4').style.visibility="hidden";
												document.getElementById('1-5').style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("p1-1").innerHTML="20.00";
													document.getElementById("nextButton").style.visibility="visible";
												},500);
											},1500);
										}	
									},1000);
								}
							},1500);
							}
					},750);
				},650);
			}
		},500);
	}
	
	else if(simsubscreennum==2)
	{
		//refresh();
		document.getElementById('1-1').style.visibility="hidden";
		document.getElementById('1-3').style.visibility="hidden";
		document.getElementById("1-2").style.visibility="hidden";
		document.getElementById("1-4").style.visibility="hidden";
		document.getElementById("1-5").style.visibility="hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		
		document.getElementById('2-1').style.visibility="visible";
        document.getElementById('2-2').style.visibility="visible";
		
		setTimeout(function()
		{
			blinkArrow(440,360,180,40);
			document.getElementById('2-2').onclick=function()
			{
				myStopFunction();
				document.getElementById('2-2').style.animation="placeSieve 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById('2-6').style.visibility="visible";
					setTimeout(function()
					{
						blinkArrow(280,200,180,40);
						document.getElementById('2-6').onclick=function()
						{
							myStopFunction();
							document.getElementById('2-6').style.transformOrigin = "100% 80%";
							document.getElementById('2-6').style.animation = "rotateSieve 1.0s forwards ";
							setTimeout(function()
							{
								document.getElementById('2-7').style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById('2-6').style.visibility="hidden";
									document.getElementById('2-7').style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById('2-3').style.visibility="visible";
										document.getElementById('2-5').style.visibility="visible";
										blinkArrow(394,214,360,40);
										document.getElementById('2-5').onclick=function()
										{
											myStopFunction();
											document.getElementById('2-5').style.animation="placeCap 0.75s forwards";
											setTimeout(function()
											{
												validateFormativeQA(1,0,"100px","150px");
												//document.getElementById('nextButton').style.visibility="visible";
											},1000);
										}
									},300);
								},200); 
							},800);
						}
					},1000);
				},1500);
			}
		},800);
	}
	
	else if(simsubscreennum==3)
	{
		//refresh();
		for(var i=1; i<=3; i++)
		{
			document.getElementById("2-"+i).style.visibility="hidden";
		}
		for(var i=5; i<=7; i++)
		{
			document.getElementById("2-"+i).style.visibility="hidden";
		}
		document.getElementById('3-1').style.visibility="visible";
		document.getElementById('3-2').style.visibility="visible";
		document.getElementById('3-3').style.visibility="visible";
		document.getElementById('3-5').style.visibility="visible";
		document.getElementById('3-7').style.visibility="visible";
		document.getElementById('3-8').style.visibility="visible";
		blinkArrow(435,230,180,40);
		document.getElementById('3-1').onclick=function()
		{
			myStopFunction();
			document.getElementById('3-1').style.visibility="hidden";
			document.getElementById('3-6').style.visibility="visible";
			document.getElementById('3-9').style.visibility="visible";
			blinkArrow(435,180,180,40);
			document.getElementById('3-9').onclick=function()
			{
				myStopFunction();
				document.getElementById('3-9').onclick="";
				document.getElementById('3-9').style.visibility="hidden";
				document.getElementById('3-10').style.visibility="visible";
				blinkArrow(192,163,180,40);
				document.getElementById('3-7').onclick=function()
				{
					myStopFunction();
					document.getElementById('3-7').onclick="";
					document.getElementById('3-7').style.visibility="hidden";
					document.getElementById('3-11').style.visibility="visible";
					blinkArrow(377,163.5,360,40);
					document.getElementById('3-8').onclick=function()
					{
						myStopFunction();
						document.getElementById('3-8').onclick="";
						document.getElementById('3-8').style.visibility="hidden";
						document.getElementById('3-12').style.visibility="visible";
						blinkArrow(222,354,90,40);
						document.getElementById('3-3').onclick=function()
						{
							myStopFunction();
							document.getElementById('3-3').onclick="";
							document.getElementById('3-3').style.visibility="hidden";
							document.getElementById('3-4').style.visibility="visible";
							document.getElementById("3-6").style.animation="shakeSieveSet 0.5s infinite linear";
							setTimeout(function()
							{
								blinkArrow(300,365,90,40);
								document.getElementById('3-5').onclick=function()
								{
									myStopFunction();
									document.getElementById('3-5').onclick="";
									document.getElementById("3-6").style.animation="";
									document.getElementById('3-3').style.visibility="visible";
									document.getElementById('3-4').style.visibility="hidden";
									document.getElementById("nextButton").style.visibility="visible";
								}
							},4000);
						}
					}
				}
			}
		}
	}
	
	else if(simsubscreennum==4)
	{
		//refresh();
		for(var i=1; i<=12; i++)
		{
			document.getElementById("3-"+i).style.visibility="hidden";
		}
		document.getElementById('4-1').style.visibility="visible";
		document.getElementById('4-2').style.visibility="visible";
		document.getElementById('4-8').style.visibility="visible";
		document.getElementById('4-9').style.visibility="visible";
		document.getElementById('4-10').style.visibility="visible";
		document.getElementById('4-11').style.visibility="visible";
		document.getElementById('4-12').style.visibility="visible";
		
		blinkArrow(376,185,360,40);
		document.getElementById('4-12').onclick=function()
		{
			myStopFunction();
			document.getElementById('4-12').style.visibility="hidden";
			document.getElementById('4-14').style.visibility="visible";
			blinkArrow(194,182,180,40);
			document.getElementById('4-11').onclick=function()
			{
				myStopFunction();
				document.getElementById('4-11').style.visibility="hidden";
				document.getElementById('4-13').style.visibility="visible";
				setTimeout(function()
				{
					blinkArrow(280,165,-90,40);
					document.getElementById('4-10').onclick=function()
					{
						myStopFunction();
						document.getElementById('4-10').style.visibility="hidden";
						setTimeout(function()
						{
							blinkArrow(280,150,-90,40);
							document.getElementById('4-2').onclick=function()
							{
								myStopFunction();
								document.getElementById('4-2').style.visibility="hidden";
								document.getElementById('4-5').style.visibility="visible";
								document.getElementById('4-6').style.visibility="visible";
								document.getElementById('4-7').style.visibility="visible";
								document.getElementById('4-10').style.visibility="hidden";
								document.getElementById('4-13').style.visibility="hidden";
								document.getElementById('4-14').style.visibility="hidden";
								document.getElementById('4-8').style.visibility="hidden";
								document.getElementById('4-9').style.visibility="hidden";
								
								document.getElementById('4-1').style.visibility="hidden";
								setTimeout(function()
								{
									document.getElementById('4-16').style.visibility="visible";
								},800);
								setTimeout(function()
								{
									blinkArrow(590,250,270,40);
									document.getElementById('4-5').onclick="";
									document.getElementById('4-7').onclick=function()
									{
										myStopFunction();
										document.getElementById('4-7').onclick="";
										document.getElementById('4-7').style.visibility="hidden";
										document.getElementById('4-3').style.visibility="visible"; //cement
										blinkArrow(477.5,290,180,40);
										document.getElementById('4-5').onclick="";
										document.getElementById('4-6').onclick=function()
										{
											myStopFunction();
											document.getElementById('4-6').onclick="";
											document.getElementById('4-6').style.visibility="hidden";
											document.getElementById('4-19').style.visibility="visible";
											document.getElementById('4-18').style.visibility="visible";
											document.getElementById('4-3').style.visibility="hidden";
											document.getElementById('4-4').style.visibility="visible";
											
											blinkArrow(505,200,360,40);
											document.getElementById('4-19').onclick=function()
											{
												myStopFunction();
												document.getElementById('4-19').onclick="";	
												document.getElementById('4-18').style.visibility="hidden";
												document.getElementById('4-19').style.transformOrigin = "100% 80%";
												document.getElementById('4-19').style.animation = "rotateSieve 1.0s forwards ";
												setTimeout(function()
												{
													document.getElementById('4-17').style.visibility="visible";
													setTimeout(function()
													{
														document.getElementById('4-17').style.visibility="hidden";
														setTimeout(function()
														{
															document.getElementById('4-15').style.visibility="visible";
															setTimeout(function()
															{
																document.getElementById('4-19').style.visibility="hidden";
																//document.getElementById('nextButton').style.visibility="visible";
																validateFormativeQA(4,2,"100px","125px");
															},200);
														},200);
													},300);
												},500);
											}
										}
									}
								},1500);
							}
						},500);
					}
				 },500);
			}
		}
	}
	
	else if(simsubscreennum==5)
	{
		//refresh();
		document.getElementById("4-4").style.visibility = "hidden";
		document.getElementById("4-5").style.visibility = "hidden";
		document.getElementById("4-15").style.visibility = "hidden";
		document.getElementById("4-16").style.visibility = "hidden";
		document.getElementById("4-17").style.visibility = "hidden";
		document.getElementById("4-18").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		// document.getElementById("p5-1").style.visibility = "visible";
		// document.getElementById("b5-1").onclick=function()
		// {
			// document.getElementById("b5-1").onclick="";
			// document.getElementById("p5-1").style.visibility = "hidden";
			
			blinkArrow(520,270,360,40);
			document.getElementById('5-5').onclick=function()
			{
				myStopFunction();
				document.getElementById('5-5').onclick="";
				document.getElementById('5-5').style.transformOrigin="100% 80%";
				document.getElementById('5-5').style.animation = "valveturn-2 1s forwards ";
				setTimeout(function(){
					document.getElementById('5-5').style.visibility="hidden";
					document.getElementById('5-6').style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById('5-9').style.visibility="visible";
						document.getElementById('5-10').style.visibility="visible";
						document.getElementById('5-10').style.transformOrigin="100% 80%";
						document.getElementById('5-10').style.animation = "water-4 2.5s forwards ";
						setTimeout(function()
						{
							document.getElementById('5-9').style.visibility="hidden";
							document.getElementById('5-6').style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("5-12").style.visibility="visible";
								blinkArrow(300,335,360,40);
								document.getElementById('5-12').onclick=function()
								{
									myStopFunction();
									document.getElementById('5-12').onclick="";
									document.getElementById('5-12').style.visibility="hidden";
									document.getElementById('5-13').style.visibility="visible";
									document.getElementById('5-13').style.animation = "mixSoil 1.5s 2 forwards ";
									setTimeout(function()
									{
										document.getElementById('5-14').style.visibility="visible";
										document.getElementById('5-7').style.visibility="hidden";
										document.getElementById('5-10').style.visibility="hidden";
										document.getElementById('5-11').style.visibility="hidden";
										document.getElementById('5-13').style.visibility="hidden";
										setTimeout(function()
										{
											document.getElementById("nextButton").style.visibility="visible";
										},500);
									},3000);
								}
							},500);
						},2500);
					},250);
				},1000);
			}
		//}
	}
	
	else if(simsubscreennum == 6)
	{
		//refresh();
		document.getElementById("5-8").style.visibility="hidden";
		document.getElementById("5-14").style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById("6-4").style.visibility="visible";
			setTimeout(function()
			{
				blinkArrow(215,205,270,40);//left,top,degree,height
				document.getElementById("6-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("6-4").onclick="";
					document.getElementById("6-4").style.animation="moveHand1 1s forwards";
					setTimeout(function()
					{
						document.getElementById("6-4").style="position:absolute; left:50px; top:335px;";
						document.getElementById("6-4").style.animation="rotHand1 0.3s forwards";
						setTimeout(function()
						{
							document.getElementById("6-2").style.visibility="hidden";
							document.getElementById("6-3").style.visibility="visible";
							// document.getElementById("6-5c1").style.visibility="visible";
							document.getElementById("6-5c2").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("6-4").style.animation="moveHandBack2 0.7s forwards";
								// document.getElementById("6-5c1").style.animation="moveCircle1 0.7s forwards";
								document.getElementById("6-5c2").style.animation="moveCircle2 0.7s forwards";
								setTimeout(function()
								{
									document.getElementById("6-6").style.visibility="visible";
									setTimeout(function(){
										document.getElementById("6-5c2").style.animation="moveSoilSamp1 0.2s forwards";
										setTimeout(function(){
											document.getElementById("6-4").style.visibility="hidden";
											document.getElementById("6-7").style.visibility="visible";
											setTimeout(function()
											{
												blinkArrow(340,220,270,40);
												document.getElementById("6-7").onclick=function(){
													myStopFunction();
													document.getElementById("6-7").onclick="";
													document.getElementById("6-7").style.animation="makeBall 2s forwards";
													setTimeout(function()
													{
														document.getElementById("6-5c2").style.visibility="hidden";
														document.getElementById("6-5c1").style.visibility="visible";
														document.getElementById("6-7").style.visibility="hidden";
														setTimeout(function(){
															document.getElementById("p6-1").style.visibility="visible";
															document.getElementById("b6-1").onclick=function()
															{
																document.getElementById("p6-1").style.visibility="hidden";
																document.getElementById("6-5c1").style.visibility="hidden";
																document.getElementById("6-6").style.visibility="hidden";
																document.getElementById("6-3").style.visibility="hidden";
																document.getElementById("6-8").style.visibility="visible";
																document.getElementById("6-5c3").style.visibility="visible";
																document.getElementById("6-5c4").style.visibility="visible";
																document.getElementById("6-5c5").style.visibility="visible";
																document.getElementById("6-5c6").style.visibility="visible";
																setTimeout(function()
																{
																	document.getElementById("nextButton").style.visibility="visible";
																},300);
															}
														},500);
													},2000);
												}
											},300);
										},250);
									},200);
								},700);
							},300);
						},300);
					},1000);
				}
			},500);
		},500);
	}
	else if(simsubscreennum == 7)
	{
		document.getElementById("6-8").style.visibility="hidden";
		for(i=3;i<=6;i++)
		{
			document.getElementById("6-5c"+i).style.visibility="hidden";
		}
		document.getElementById("nextButton").style.visibility = "hidden";	
		document.getElementById("b7-1").onclick=function()
		{
			document.getElementById("p7-1").style.visibility = "hidden";
			document.getElementById("7-5c3").style="position:absolute; left:185px; top:285px; ";
			setTimeout(function(){
				document.getElementById("7-3").style.visibility="visible";
				setTimeout(function(){
					blinkArrow(15,300,180,40);
					document.getElementById("7-3").onclick=function(){
						myStopFunction();
						document.getElementById("7-3").onclick="";
						document.getElementById("7-3").style.animation="moveHandToBall 0.5s forwards";
						setTimeout(function()
						{
							document.getElementById("p7").innerHTML="Apply enough pressure by exerting 90 strokes per minutes. (Here stroke means forward and backward movement of your hand from the starting position)";
							document.getElementById("p7-1").style.visibility = "visible";
							document.getElementById("b7-1").onclick=function()
							{
								document.getElementById("p7-1").style.visibility = "hidden";
								blinkArrow(160,320,180,40);
								document.getElementById("7-3").onclick=function()
								{
									myStopFunction();
									document.getElementById("7-3").onclick="";
									document.getElementById("7-3").style="position:absolute; left:165px; top:220px; ";
									document.getElementById("7-3").style.animation="rollHand1 0.75s 5";
									document.getElementById("7-5c3").style.animation="makeThread1 3.75s forwards";
									setTimeout(function()
									{
										document.getElementById("7-3").style.animation="";
										document.getElementById("7-5c3").style.animation="";
										document.getElementById("p7").innerHTML="Roll the soil until it achieves 3mm or 1/8 inches of diameter.";
										document.getElementById("p7-1").style.visibility = "visible";
										document.getElementById("b7-1").onclick=function()
										{
											document.getElementById("p7-1").style.visibility = "hidden";
											document.getElementById("7-4").style.visibility = "visible";
											blinkArrow(350,320,0,40);
											document.getElementById("7-4").onclick=function()
											{
												myStopFunction();
												document.getElementById("7-4").onclick="";
												document.getElementById("7-3").style.animation="rollHand1 0.75s 5";
												document.getElementById("7-4").style.animation="rollHand2 0.75s 5";
												document.getElementById("7-5c3").style.animation="makeThread2 3.75s forwards";
												setTimeout(function()
												{
													document.getElementById("7-3").style.visibility="hidden";
													document.getElementById("7-4").style.visibility="hidden";
													setTimeout(function()
													{
														document.getElementById("nextButton").style.visibility="visible";
													},750);
												},3850);
											}
										}
									},3850);
												
								}
							}
						},600);
					}
				},300);
			},300);
		}
	}
	
	else if(simsubscreennum == 8)
	{
		////refresh();
		document.getElementById("nextButton").style.visibility = "hidden";
		
		document.getElementById("8-2").style.visibility="visible";
		document.getElementById("p8-1").innerHTML="000.01";
		document.getElementById("8-0").style.backgroundColor="lightgrey";
		setTimeout(function()
		{
			blinkArrow(488.5,490,90,30);
			document.getElementById("8-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("8-2").onclick="";
				document.getElementById("8-2").style.visibility="hidden";
				document.getElementById("p8-1").innerHTML="000.00";
				setTimeout(function()
				{
					blinkArrow(60,435,180,40);
					document.getElementById("8-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("8-3").onclick="";
						document.getElementById("8-3").style.animation="placeEmptyContainer8 1.25s forwards";
						setTimeout(function()
						{
							IsInt(dataset[p][1]);
							document.getElementById("p8-1").innerHTML=data;
							document.getElementById("p8-2").innerHTML="Weight of empty moisture can (W<sub>1</sub>) = "+dataset[p][1]+" g";
							setTimeout(function()
							{
								//document.getElementById("nextButton").style.visibility="visible";
								validateFormativeQA(0,2,"100px","125px");
							},500);
						},1300);	
					}
				},750);
			}
		},500);
	}
     
	else if(simsubscreennum == 9)
	{
		document.getElementById("b9-3").onclick=function()
		{
			document.getElementById("p9-3").style.visibility = "hidden";
			document.getElementById("9-3a").style.visibility = "hidden";
			document.getElementById("9-3b").style.visibility = "visible";
			document.getElementById("9-2").style.visibility="visible";
			document.getElementById("p9-1").innerHTML="000.01";
			document.getElementById("9-0").style.backgroundColor="lightgrey";
			setTimeout(function()
			{
				blinkArrow(488.5,490,90,30);
				document.getElementById("9-2").onclick=function()
				{
					myStopFunction();
					document.getElementById("9-2").onclick="";
					document.getElementById("9-2").style.visibility="hidden";
					document.getElementById("p9-1").innerHTML="000.00";
					setTimeout(function()
					{
						blinkArrow(75,435,180,30);
						document.getElementById("9-3b").onclick=function()
						{
							myStopFunction();
							document.getElementById("9-3b").onclick="";
							document.getElementById("9-3b").style.animation="placeContainerSample 1.25s forwards";
							setTimeout(function()
							{
								IsInt(dataset[p][2]);
								document.getElementById("p9-1").innerHTML=data;
								document.getElementById("p9-2").innerHTML="Weight of moisture can + wet soil (W<sub>2</sub>) = "+dataset[p][2]+" g";
								setTimeout(function()
								{
									//document.getElementById("nextButton").style.visibility="visible";
									validateFormativeQA(3,1,"200px","125px");
								},500);
							},1300);	
						}
					},750);
				}
			},500);
		}
	}
	
	else if(simsubscreennum == 10)
	{
		//refresh();
		document.getElementById("9-3b").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("10-11").style.visibility = "visible";
		document.getElementById("incDoor10-1").style="visibility:visible;";
		document.getElementById("10-12").innerHTML="&nbsp;110";
		
		blinkArrow(90,235,270,30);
		document.getElementById("10-11").onclick=function()
		{
			myStopFunction();
			$('.door').toggleClass('doorOpen');
			document.getElementById("10-11").onclick="";	
			setTimeout(function(){
				document.getElementById("10-11").style.visibility="hidden";
			},350);
			setTimeout(function()
			{
				blinkArrow(75,485,180,30);
				document.getElementById("10-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("10-3a").onclick="";
					document.getElementById("10-3a").style.animation="placeContainerinOven 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor10-1").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor10-1").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("10-11").style.visibility="visible";
								
								var temp=110;
								blinkArrow(215,147,270,25);
								document.getElementById("10-13").onclick=function()
								{
									if(temp<116)
									{
										temp++;
										document.getElementById("10-12").innerHTML="&nbsp;"+temp;
									}
									if(temp>=115)
									{
										myStopFunction();
										document.getElementById("10-13").onclick="";
										setTimeout(function()
										{
											document.getElementById("10-2").style.visibility="visible";
											$("#10-3").fadeIn(1000);
											setTimeout(function()
											{
												$("#10-3").fadeOut(2000);
												setTimeout(function()
												{
													document.getElementById("10-2").style.visibility="hidden";
													takeOutCaontainer();
												},2000);
											},2000);
										},1500);
									}
								}
							},1150);
						}
					},1500);
				}	
			},1500);
		}
	}
	
	else if(simsubscreennum == 11)
	{
		//refresh();
		document.getElementById("incDoor10-1").style.visibility="hidden";
		document.getElementById("incDoor10-2").style.visibility="hidden";
		document.getElementById("incDoor10-3").style.visibility="hidden";
		document.getElementById("10-11").style.visibility="hidden";
		
		document.getElementById("11-3").style.visibility="visible";
		document.getElementById("p11-1").style.visibility="visible";
		document.getElementById("11-0").style.backgroundColor="lightgrey";
		document.getElementById("11-0").style.visibility="visible";
		document.getElementById("11-2").style.visibility="visible";
		document.getElementById("p11-2").style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(488.5,490,90,30);
			document.getElementById("11-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("11-2").onclick="";
				document.getElementById("11-2").style.visibility="hidden";
				document.getElementById("p11-1").innerHTML="000.00";
				setTimeout(function()
				{
					blinkArrow(75,415,180,30);
					document.getElementById("11-3a").onclick=function()
					{
						myStopFunction();
						document.getElementById("11-3a").onclick="";
						document.getElementById("11-3a").style.animation="placeEmptyContainer 1.25s forwards";
						document.getElementById("11-3").style.visibility="hidden";
						setTimeout(function()
						{
							IsInt(dataset[p][3]);
							document.getElementById("p11-1").innerHTML=data;
							document.getElementById("p11-2").innerHTML="Weight of container + dry soil (W<sub>3</sub>) = "+dataset[p][3]+" g" ;
							setTimeout(function()
							{
								document.getElementById("nextButton").style.visibility="visible";
							},500);
						},1300);	
					}
				},750);
			}
		},500);
	}
	
	else if(simsubscreennum == 12)
	{
		//refresh();
		// document.getElementById('trial').style.visibility="hidden";
		document.getElementById("p11-1").style.visibility="hidden";
		document.getElementById("11-0").style.visibility="hidden";
		document.getElementById("11-2").style.visibility="hidden";
		document.getElementById("p11-2").style.visibility="hidden";

		document.getElementById("wc").value="";
		document.getElementById("wc").disabled=false;

		document.getElementById("mark1").style.visibility="visible";
		document.getElementById("mark1").innerHTML="";
		document.getElementById("res1").style.visibility="visible";
		document.getElementById("res1").disabled=true;
		document.getElementById("chk1").style.visibility="visible";
		
		document.getElementById("t1").innerHTML=dataset[p][0];
		document.getElementById("t2").innerHTML=dataset[p][1]+" g";
		document.getElementById("t3").innerHTML=dataset[p][2]+" g";
		document.getElementById("t4").innerHTML=dataset[p][3]+" g";
		
		var ww = dataset[p][2] - dataset[p][3]; //weight of water
		var wd = dataset[p][3] - dataset[p][1]; //weight of dry soil
		var wc = (ww/wd)*100;
		console.log(wc, dataset[p][2]);
		document.getElementById("chk1").onclick=function()
		{
			var id1=document.getElementById("wc");
			var mark1=document.getElementById("mark1");
			var chk1=document.getElementById("chk1");
			var res1=document.getElementById("res1");
			validateAnswer(id1, wc, mark1, chk1, res1);
		}
	}
	else if(simsubscreennum == 13)
	{
		$("#13-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	else if(simsubscreennum == 14)
	{
		cnt=0;
		$("#13-1").fadeOut();
		generate_table();
		setTimeout(function()
		{
			document.getElementById("fc").style.visibility="visible";
			document.getElementById("ft").style.visibility="visible";
		},500);
		
		var awc = 0; //Avg water content
		for(var i=0;i<=2;i++)
		{
			awc=awc+(((dataset[i][2] - dataset[i][3])/(dataset[i][3] - dataset[i][1]))*100);
			console.log(awc);
		}
		awc=awc/3;
		document.getElementById("chk2").onclick=function()
		{
			var id2=document.getElementById("awc");
			var mark2=document.getElementById("mark2");
			var chk2=document.getElementById("chk2");
			var res2=document.getElementById("res2");
			validateAnswer(id2, awc, mark2, chk2, res2);
		}
		var ip = (30.8 - awc);
		document.getElementById("chk3").onclick=function()
		{
			var id3=document.getElementById("ip");
			var mark3=document.getElementById("mark3");
			var chk3=document.getElementById("chk3");
			var res3=document.getElementById("res3");
			validateAnswer(id3, ip, mark3, chk3, res3);
		}
	}
}

function validateAnswer(id,ans,mark,chk,res)
{
	if(!id.value || !id.value!=" ")
	{
		alert("Enter the value to proceed ");
	}
	else
	{
		n = id.value;
		if(Math.round(n) == Math.round(ans))
		{
			cnt++;
			mark.style="visibility:visible; color:green; font-size:22px;";
			var right="&#10004;";
			mark.innerHTML=right;
			chk.style.visibility="hidden";
			res.style.visibility="hidden";
			id.style.color="black";
			id.disabled=true;
			id.style.backgroundColor="white";
			if(simsubscreennum==12)
			{
				validateFormativeQA(2,0,"450px","350px");
				//document.getElementById("nextButton").style.visibility="visible";
			}
			if(cnt<=1 && simsubscreennum == 14)
			{
				setTimeout(function()
				{
					document.getElementById("pi").style.visibility="visible";
					document.getElementById("note").style.visibility="visible";
				},500);
			}
		}
		else
		{
			res.disabled=false;
			var wrong="&#10008;";
			mark.style="visibility:visible; color:red; font-size:22px;";
			mark.innerHTML=wrong;
		}
	}	
	res.onclick=function()
	{
		cnt++;
		chk.style.visibility="hidden";
		res.style.visibility="hidden";
		id.value=ans.toFixed(2);
		id.style.color="black";
		id.disabled=true;
		id.style.backgroundColor="white";
		mark.style.visibility="hidden";
		if(simsubscreennum==12)
		{
			document.getElementById("nextButton").style.visibility="visible";
		}
		if(cnt<=1 && simsubscreennum == 14)
		{
			setTimeout(function()
			{
				document.getElementById("pi").style.visibility="visible";
				document.getElementById("note").style.visibility="visible";
			},500);
		}
	}
}

function takeOutCaontainer()
{
	blinkArrow(90,235,270,30);
	document.getElementById("10-11").onclick=function()
	{
		myStopFunction();
		$('.door').toggleClass('doorOpen');
		document.getElementById("10-11").onclick="";	
		setTimeout(function()
		{
			document.getElementById("10-11").style.visibility="hidden";
			setTimeout(function()
			{
				blinkArrow(75,245,180,30);
				document.getElementById("10-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("10-3a").onclick="";
					document.getElementById("10-3a").style.animation="placeContainerBack 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor10-1").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor10-1").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("10-11").style.visibility="visible";
								document.getElementById("nextButton").style.visibility="visible";
							},1150);
						}
					},1500);			
				}
			},1500);
		},350);
	}
}