//Trial No.,Number of blows(N), Weight of container,(w1)(g), Weight of container+wet soil(w2)g, Weight of container + dry soil(w3)g
var dataset=[[1,31,22.23,28.56,27.4],//22.23
			[2,27,23.31,29.27,28.1],//29
			[3,20,21.87,25.73,24.9]];
			
var nob=[31,29,20];
var cnt=0;
var repeat=0;
var count=1;
var p=0;
var turningCrank
var b=0;
var awc = 0;

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

var questions=["A fine-grained soil can exist in _______ state.",
			   "The content of water at which the soil changes from one state to the other are known as ______ .",
			   "In liquid limit _____ g of the soil sample is taken for the experiment.",
			   "The soil can be considered soft if the moisture content is lesser than the liquid limit. ",
			   "The paste will have a consistency that will require __ to __ drops of the cup to cause the required closure of the standard groove"];
			   
var options2=[["Plastic","Liquid","Semi solid","All the above"],//all the above
			  ["Consistency limits","In consistency limit","Changing limits","None of the above"],//Consistency limits
			  ["130","120","140","150"],//120   
			  ["True","False"],//True
			  ["20 to 25","40 to 45","30 to 35","50 to 55"]];//30 to 35

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
            $(this).append("<tr><td>" + dataset[j][0] + "</td><td>" + dataset[j][1] + "</td><td>"+dataset[j][2]+"</td><td>"+dataset[j][3]+"</td><td>"+dataset[j][4]+"</td><td>"+(dataset[j][3] - dataset[j][4]).toFixed(2)+"</td><td>"+(dataset[j][4] - dataset[j][2]).toFixed(2)+"</td><td>" + ((dataset[j][3] - dataset[j][4]) /(dataset[j][4] - dataset[j][2])*100).toFixed(2)+ "</td></tr>");
			j++;
            generate_table();
        });
	}
}

function navNext()
{
	for(temp=0;temp<=16;temp++)
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
													document.getElementById("p1-1").innerHTML="120.00";
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
												validateFormativeQA(2,1,"100px","150px");
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
																validateFormativeQA(0,3,"100px","125px");
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
											validateFormativeQA(1,0,"150px","150px");
											//document.getElementById("nextButton").style.visibility="visible";
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
		
			blinkArrow(215,205,270,40);//left,top,degree,height
			document.getElementById("6-4").onclick=function()
			{
				myStopFunction();
				document.getElementById("6-4").onclick="";
				document.getElementById("6-4").style.animation="moveTrowel1 1s forwards";
				setTimeout(function()
				{
					document.getElementById("6-4").style.visibility="hidden";
					document.getElementById("6-5").style.visibility="visible";
					document.getElementById("6-2").style.visibility="hidden";
					document.getElementById("6-3").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("6-5").style.animation="moveTrowel2 1s forwards";
						setTimeout(function()
						{
							blinkArrow(435,282,270,40);
							document.getElementById("6-5").onclick=function()
							{
								myStopFunction();
								document.getElementById("6-5").onclick="";
								document.getElementById("6-5").style="position:absolute; left: 350px; top: 265px;";
								document.getElementById("6-5").style.animation="rotHand1 0.5s forwards";
								setTimeout(function()
								{
									document.getElementById("6-5c1").style.visibility="visible";
									document.getElementById("6-5").style.visibility="hidden";
									document.getElementById("6-4").style="visibility:visible; position:absolute; left: 350px; top: 260px;";
									addMorePasteIntoCup();
								},500);
							}
						},1200);
					},300);
				},1000);
			}
		},500);
	}
	else if(simsubscreennum == 7)
	{
		document.getElementById("6-31").style.visibility="hidden";
		document.getElementById("6-8").style.visibility="hidden";
		document.getElementById("6-5c1").style.visibility="hidden";
		document.getElementById("nextButton").style.visibility = "hidden";	
		setTimeout(function()
		{
			document.getElementById("7-2").style.visibility="visible";
			blinkArrow(470,220,270,40);
			document.getElementById("7-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("7-2").onclick="";
				document.getElementById("7-2").style.animation="groove 1s forwards";
				document.getElementById("7-2c1").style.animation="grooveSoil 1s forwards";
				setTimeout(function()
				{
					document.getElementById("7-2").style.visibility="hidden";
					document.getElementById("nextButton").style.visibility="visible";
				},1200);
			}
		},500);
	}
	
	else if(simsubscreennum == 8)
	{
		setTimeout(function()
		{
			blinkArrow(395,295,270,30);
			document.getElementById("8-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("8-3").onclick="";
				document.getElementById("8-3").style.visibility="hidden";
				document.getElementById("8-5").style.visibility="visible";
				
				turningCrank = setInterval(turnCrank_LiftDropCup,975);
				document.getElementById("8-5").style.transformOrigin="bottom center";
				document.getElementById("8-5").style.animation="turnCrank 1s infinite";
				document.getElementById("8-4").style.animation="CupLiftDrop 1s infinite";
				document.getElementById("8-2").style.animation="SoilLiftDrop 1s infinite";
				setTimeout(function()
				{
					document.getElementById("p8-1").style.visibility="visible";
					document.getElementById("b8-1").onclick=function()
					{
						document.getElementById("p8-1").style.visibility="hidden";
						if(b < dataset[p][1]-5)
						{
							b=dataset[p][1]-5;
						}
					}
				},5000);
			}
		},500);
	}	
	else if(simsubscreennum == 9)
	{
		document.getElementById("8-7").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("8-3").style.visibility="hidden";
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
					blinkArrow(60,435,180,40);
					document.getElementById("9-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("9-3").onclick="";
						document.getElementById("9-3").style.animation="placeEmptyContainer8 1.25s forwards";
						setTimeout(function()
						{
							//IsInt(dataset[p][1]);
							document.getElementById("p9-1").innerHTML=dataset[p][2];
							document.getElementById("p9-2").innerHTML="Weight of empty container (W<sub>1</sub>) = "+dataset[p][2]+" g";
							setTimeout(function()
							{
								//document.getElementById("nextButton").style.visibility="visible";
								validateFormativeQA(4,2,"100px","125px");
							},500);
						},1300);	
					}
				},750);
			}
		},500);
	}
     
	else if(simsubscreennum == 10)
	{
		setTimeout(function()
		{
			blinkArrow(150,270,270,40);
			document.getElementById("10-4").onclick=function()
			{
				myStopFunction();
				document.getElementById("10-4").onclick="";
				document.getElementById("10-4").style.animation="TakeSoilThrouhTrowel1 0.75s forwards";
				setTimeout(function()
				{
					document.getElementById("10-4").style.visibility = "hidden";
					document.getElementById("10-3").style.visibility = "hidden";
					document.getElementById("10-32").style.visibility = "visible";
					document.getElementById("10-5").style.visibility="visible";
					document.getElementById("10-5").style.animation="TakeSoilThrouhTrowel2 0.5s forwards";
					setTimeout(function()
					{
						document.getElementById("10-5").style="position:absolute; left: 265px; top: 270px;";
						document.getElementById("10-5").style.animation="TakeSoilThrouhTrowel3 1.25s forwards";
						setTimeout(function()
						{
							blinkArrow(150,300,270,40);
							document.getElementById("10-5").onclick=function()
							{
								myStopFunction();
								document.getElementById("10-5").onclick="";
								document.getElementById("10-5").style="position:absolute; left: 20px; top: 260px;";
								document.getElementById("10-5").style.animation="rotTrowel 0.5s forwards";
								setTimeout(function()
								{
									document.getElementById("10-5").style.visibility="hidden";
									document.getElementById("10-3b").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("10-1").style.visibility="hidden";
										document.getElementById("10-32").style.visibility="hidden";
										//Weight soil paortion taken
										document.getElementById("10-0").style.visibility="visible";
										document.getElementById("10-2").style.visibility="visible";
										document.getElementById("p10-1").style.visibility="visible";
										document.getElementById("p10-2").style.visibility="visible";
										document.getElementById("p10-1").innerHTML="000.01";
										document.getElementById("10-0").style.backgroundColor="lightgrey";
										setTimeout(function()
										{
											blinkArrow(488.5,490,90,30);
											document.getElementById("10-2").onclick=function()
											{
												myStopFunction();
												document.getElementById("10-2").onclick="";
												document.getElementById("10-2").style.visibility="hidden";
												document.getElementById("p10-1").innerHTML="000.00";
												setTimeout(function()
												{
													blinkArrow(75,435,180,30);
													document.getElementById("10-3a").onclick=function()
													{
														myStopFunction();
														document.getElementById("10-3a").onclick="";
														document.getElementById("10-3b").style.animation="placeContainerSample 1.25s forwards";
														document.getElementById("10-3a").style.animation="placeContainer 1.25s forwards";
														setTimeout(function()
														{
															//IsInt(dataset[p][2]);
															document.getElementById("p10-1").innerHTML=dataset[p][3];
															document.getElementById("p10-2").innerHTML="Weight of container + wet soil (W<sub>2</sub>) = "+dataset[p][3]+" g";
															setTimeout(function()
															{
																//document.getElementById("nextButton").style.visibility="visible";
																validateFormativeQA(3,0,"200px","125px");
															},500);
														},1300);	
													}
												},750);
											}
										},500);
									},500);
								},500);
							}
						},1250);
					},500);
				},750);
			}
		},500);
	}
	
	else if(simsubscreennum == 11)
	{
		//refresh();
		document.getElementById("10-0").style.visibility="hidden";
		document.getElementById("10-2").style.visibility="hidden";
		document.getElementById("p10-1").style.visibility="hidden";
		document.getElementById("p10-2").style.visibility="hidden";
		document.getElementById("10-3b").style.visibility = "hidden";
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("11-11").style.visibility = "visible";
		document.getElementById("incDoor11-1").style="visibility:visible;";
		document.getElementById("11-12").innerHTML="&nbsp;110";
		
		blinkArrow(90,235,270,30);
		document.getElementById("11-11").onclick=function()
		{
			myStopFunction();
			$('.door').toggleClass('doorOpen');
			document.getElementById("11-11").onclick="";	
			setTimeout(function(){
				document.getElementById("11-11").style.visibility="hidden";
			},350);
			setTimeout(function()
			{
				blinkArrow(75,485,180,30);
				document.getElementById("11-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("11-3a").onclick="";
					document.getElementById("11-3a").style.animation="placeContainerinOven 1.5s forwards";
					document.getElementById("11-4").style.animation="placeContainerwithSoilinOven 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor11-1").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor11-1").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("11-11").style.visibility="visible";
								
								var temp=110;
								blinkArrow(215,147,270,25);
								document.getElementById("11-13").onclick=function()
								{
									if(temp<116)
									{
										temp++;
										document.getElementById("11-12").innerHTML="&nbsp;"+temp;
									}
									if(temp>=115)
									{
										myStopFunction();
										document.getElementById("11-13").onclick="";
										setTimeout(function()
										{
											document.getElementById("11-2").style.visibility="visible";
											$("#11-3").fadeIn(1000);
											setTimeout(function()
											{
												$("#11-3").fadeOut(2000);
												setTimeout(function()
												{
													document.getElementById("11-2").style.visibility="hidden";
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
	
	else if(simsubscreennum == 12)
	{
		//refresh();
		document.getElementById("incDoor11-1").style.visibility="hidden";
		document.getElementById("incDoor11-2").style.visibility="hidden";
		document.getElementById("incDoor11-3").style.visibility="hidden";
		document.getElementById("11-11").style.visibility="hidden";
		
		document.getElementById("12-3").style.visibility="visible";
		document.getElementById("p12-1").style.visibility="visible";
		document.getElementById("12-0").style.backgroundColor="lightgrey";
		document.getElementById("12-0").style.visibility="visible";
		document.getElementById("12-2").style.visibility="visible";
		document.getElementById("p12-2").style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(488.5,490,90,30);
			document.getElementById("12-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("12-2").onclick="";
				document.getElementById("12-2").style.visibility="hidden";
				document.getElementById("p12-1").innerHTML="000.00";
				setTimeout(function()
				{
					blinkArrow(75,415,180,30);
					document.getElementById("12-3a").onclick=function()
					{
						myStopFunction();
						document.getElementById("12-3a").onclick="";
						document.getElementById("12-3a").style.animation="placeContainer 1.25s forwards";
						document.getElementById("12-4").style.animation="placeContainerSample 1.25s forwards";
						document.getElementById("12-3").style.visibility="hidden";
						setTimeout(function()
						{
							//IsInt(dataset[p][3]);
							document.getElementById("p12-1").innerHTML=dataset[p][4];
							document.getElementById("p12-2").innerHTML="Weight of container + dry soil (W<sub>3</sub>) = "+dataset[p][4]+" g" ;
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
	
	else if(simsubscreennum == 13)
	{
		//refresh();
		// document.getElementById('trial').style.visibility="hidden";
		document.getElementById("p12-1").style.visibility="hidden";
		document.getElementById("12-0").style.visibility="hidden";
		document.getElementById("12-2").style.visibility="hidden";
		document.getElementById("p12-2").style.visibility="hidden";

		document.getElementById("wc").value="";
		document.getElementById("wc").disabled=false;

		document.getElementById("mark1").style.visibility="visible";
		document.getElementById("mark1").innerHTML="";
		document.getElementById("res1").style.visibility="visible";
		document.getElementById("res1").disabled=true;
		document.getElementById("chk1").style.visibility="visible";
		
		document.getElementById("t1").innerHTML=dataset[p][0];
		document.getElementById("t2").innerHTML=dataset[p][1];
		document.getElementById("t3").innerHTML=dataset[p][2]+" g";
		document.getElementById("t4").innerHTML=dataset[p][3]+" g";
		document.getElementById("t5").innerHTML=dataset[p][4]+" g";
		
		var ww = dataset[p][3] - dataset[p][4]; //weight of water
		var wd = dataset[p][4] - dataset[p][2]; //weight of dry soil
		var wc = (ww/wd)*100;
		//console.log(wc, dataset[p][2]);
		document.getElementById("chk1").onclick=function()
		{
			var id1=document.getElementById("wc");
			var mark1=document.getElementById("mark1");
			var chk1=document.getElementById("chk1");
			var res1=document.getElementById("res1");
			validateAnswer(id1, wc, mark1, chk1, res1);
		}
	}
	else if(simsubscreennum == 14)
	{
		$("#13-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	else if(simsubscreennum == 15)
	{
		cnt=0;
		$("#13-1").fadeOut();
		generate_table();
		setTimeout(function()
		{
			document.getElementById("fc").style.visibility="visible";
			document.getElementById("ft").style.visibility="visible";
		},500);
		
		//Avg water content
		for(var i=0;i<=2;i++)
		{
			awc=awc+(((dataset[i][3] - dataset[i][4])/(dataset[i][4] - dataset[i][2]))*100);
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
	}
	else if(simsubscreennum==16)
	{
		document.getElementById("plas").style.visibility="hidden";
		document.getElementById("ft").style.visibility="hidden";
		document.getElementById("fc").style.visibility="hidden";
		var dataX=[];
		var dataY=[];
		var i=0
		for (i=0;i<=2;i++)
		{
			dataY[i]=parseFloat((((dataset[i][3]-dataset[i][4])/(dataset[i][4]-dataset[i][2]))*100).toFixed(2));
		}
		
		$("#chartContainer").ejChart(
        {
		    primaryXAxis:
            {
			   	labelFormat: "{value}",
                title: { text: 'Number of drops, N' },
                range: { min:10, max: 40, interval: 5 }
            },	
			primaryYAxis:
            {
				labelFormat: "{value}",
                title: { text: 'Water content (%)' },
                range: { min: 20, max: 30, interval: 2 }				
            },	
			series: 
			[
			    {
                points: [
					{y: dataY[0], x: dataset[0][1]},
					{y: dataY[1], x: dataset[1][1]},
					{y: dataY[2], x: dataset[2][1]}
				],
				type: 'line',
				fill: "#0066FF",
				name : 'Water content v/s Number of drops',
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
					points: [
					
					{ x: 20, y: 0},
					{ x: 20, y: dataY[2] },
					{ x: 0, y: dataY[2]}
					
					],
					type: 'line',
					dashArray : '10,4',
					name: 'Water content at N = 20',
					fill: "#FF1493",
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
					points: [
					
					{ x: 30, y: 0},
					{ x: 30, y: 22.84 },
					{ x: 0, y: 22.84}
					
					],
					type: 'line',
					dashArray : '10,4',
					name: 'Water content at N = 30',
					fill: "#00FF00",
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
					points: [
					
					{ x: 25, y: 0},
					{ x: 25, y: 25.25 },
					{ x: 0, y: 25.25}
					
					],
					type: 'line',
					dashArray : '12,4',
					name: 'Liquid limit',
					fill: "#800080",
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
			
			legend:{visible:true}
        });
		setTimeout(function()
		{
			document.getElementById("flow").style.visibility="visible";
			var fi=0; 
			fi=((27.39-22.84)/Math.log(30/20));
			document.getElementById("chk3").onclick=function()
			{
				var id3=document.getElementById("fi");
				var mark3=document.getElementById("mark3");
				var chk3=document.getElementById("chk3");
				var res3=document.getElementById("res3");
				validateAnswer(id3, fi, mark3, chk3, res3);
			}
			var ip = (25.25 - awc);
			document.getElementById("chk4").onclick=function()
			{
				var id4=document.getElementById("ip");
				var mark4=document.getElementById("mark4");
				var chk4=document.getElementById("chk4");
				var res4=document.getElementById("res4");
				validateAnswer(id4, ip, mark4, chk4, res4);
			}
			var ti = ip/fi;
			document.getElementById("chk5").onclick=function()
			{
				var id5=document.getElementById("ti");
				var mark5=document.getElementById("mark5");
				var chk5=document.getElementById("chk5");
				var res5=document.getElementById("res5");
				validateAnswer(id5, ti, mark5, chk5, res5);
			}
		},1500);
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
			if(simsubscreennum==13)
			{
				document.getElementById("nextButton").style.visibility="visible";
			}
			if(cnt<=1 && simsubscreennum == 15)
			{
				setTimeout(function()
				{
					document.getElementById("plas").style.visibility="visible";
					document.getElementById("plas").innerHTML="Plastic limit of given soil sample = "+ans.toFixed(2)+"%";
					document.getElementById("nextButton").style.visibility="visible";
				},500);
			}
			if(simsubscreennum==16)
			{
				if(document.getElementById("res3").style.visibility=="hidden")
				{
					document.getElementById("plasticity").style.visibility="visible";
				}
				if(document.getElementById("res3").style.visibility=="hidden" && document.getElementById("res4").style.visibility=="hidden")
				{
					document.getElementById("toughness").style.visibility="visible";
				}
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
		if(simsubscreennum==13)
		{
			document.getElementById("nextButton").style.visibility="visible";
		}
		if(cnt<=1 && simsubscreennum == 15)
		{
			setTimeout(function()
			{
				document.getElementById("plas").style.visibility="visible";
				document.getElementById("plas").innerHTML="Plastic limit of given soil sample = "+ans.toFixed(2)+"%";
				document.getElementById("nextButton").style.visibility="visible";
			},500);
		}
		if(simsubscreennum==16)
		{
			if(document.getElementById("res3").style.visibility=="hidden")
			{
				document.getElementById("plasticity").style.visibility="visible";
			}
			if(document.getElementById("res3").style.visibility=="hidden" && document.getElementById("res4").style.visibility=="hidden")
			{
				document.getElementById("toughness").style.visibility="visible";
			}
		}
	}
}

function takeOutCaontainer()
{
	blinkArrow(90,235,270,30);
	document.getElementById("11-11").onclick=function()
	{
		myStopFunction();
		$('.door').toggleClass('doorOpen');
		document.getElementById("11-11").onclick="";	
		setTimeout(function()
		{
			document.getElementById("11-11").style.visibility="hidden";
			setTimeout(function()
			{
				blinkArrow(75,245,180,30);
				document.getElementById("11-3a").onclick=function()
				{
					myStopFunction();
					document.getElementById("11-3a").onclick="";
					document.getElementById("11-3a").style.animation="placeContainerBack 1.5s forwards";
					document.getElementById("11-4").style.animation="placeContainerwithSoilBack 1.5s forwards";
					setTimeout(function()
					{
						blinkArrow(430,255,0,35);
						document.getElementById("incDoor11-1").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor11-1").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("11-11").style.visibility="visible";
								document.getElementById("nextButton").style.visibility="visible";
							},1150);
						}
					},1500);			
				}
			},1500);
		},350);
	}
}

function addMorePasteIntoCup()
{
	setTimeout(function()
	{
		document.getElementById("6-4").style.visibility="hidden";
		document.getElementById("6-41").style.visibility="visible";
	
		blinkArrow(435,282,270,40);
		document.getElementById("6-41").onclick=function()
		{
			myStopFunction();
			document.getElementById("6-41").onclick="";
			document.getElementById("6-41").style.animation="moveTrowel12 1s forwards";
			setTimeout(function()
			{
				document.getElementById("6-41").style.visibility="hidden";
				document.getElementById("6-51").style.visibility="visible";
				document.getElementById("6-3").style.visibility="hidden";
				document.getElementById("6-31").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("6-51").style.animation="moveTrowel2 1s forwards";
					setTimeout(function()
					{
						blinkArrow(435,282,270,40);
						document.getElementById("6-51").onclick=function()
						{
							myStopFunction();
							document.getElementById("6-51").onclick="";
							document.getElementById("6-51").style="position:absolute; left: 350px; top: 265px;";
							document.getElementById("6-51").style.animation="rotHand1 0.5s forwards";
							setTimeout(function()
							{
								document.getElementById("6-5c1").style="position: absolute; left: 439px; top: 335px; width: 67.5px; height: 40.5px; border-radius: 100%; background: rgba(0, 0, 0, 0) radial-gradient(at 20px 30px, rgb(209, 169, 127) 0%, rgb(192, 70, 46) 95%) repeat scroll 0% 0%; visibility: visible;";
								document.getElementById("6-51").style.visibility="hidden";
								document.getElementById("6-41").style="visibility:visible; position:absolute; left: 350px; top: 260px;";
								setTimeout(function()
								{
									blinkArrow(435,282,270,40);
									document.getElementById("6-41").onclick=function()
									{
										myStopFunction();
										document.getElementById("6-41").onclick="";
										document.getElementById("6-41").style="position:absolute; left: 350px; top: 260px;";
										document.getElementById("6-41").style.animation="moveTrowel13 0.75s 2 forwards";
										setTimeout(function()
										{
											document.getElementById("6-41").style.visibility="hidden";
											document.getElementById("nextButton").style.visibility="visible";
										},1700);
									}
								},500);
							},500);
						}
					},1200);
				},300);
			},1000);
		}
	},500);
}

function turnCrank_LiftDropCup()
{
	if(b<10)
	{
		document.getElementById("numBlows").innerHTML="000"+ ++b;
	}
	else 
	{
		document.getElementById("numBlows").innerHTML="00"+ ++b;
	}
	document.getElementById("p8-4").innerHTML=document.getElementById("numBlows").innerHTML;
	if(b>=dataset[p][1])
	{
		clearInterval(turningCrank);
		turningCrank=0;
		blinkArrow(417.5,367.5,270,30);
		document.getElementById("8-5").style.transformOrigin="";
		document.getElementById("8-5").style.animation="";
		document.getElementById("8-4").style.animation="";
		document.getElementById("8-2").style.animation="";
		document.getElementById("8-2").style.visibility="hidden";
		document.getElementById("8-7").style.visibility="visible";
		document.getElementById("p8-3").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById("p8-2").innerHTML="Number of blows, N = "+dataset[p][1];
			document.getElementById("8-5").style.visibility="hidden";
			document.getElementById("8-3").style.visibility="visible";
			myStopFunction();
			document.getElementById("p8-3").style.visibility="hidden";
			document.getElementById("nextButton").style.visibility="visible";
		},3600);
	}
}

function refresh()
{
	document.getElementById("8-5").style.transformOrigin="";
	document.getElementById("8-5").style.animation="";
	document.getElementById("8-4").style.animation="";
	document.getElementById("8-2").style.animation="";
}