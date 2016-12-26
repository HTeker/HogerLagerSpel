window.onload = reageerOpLaden;

var totaalAantalOgenComputer;
var totaalAantalOgenSpeler;
var saldo = 100;
var inzet = 0;
var totaalSaldo;
var verwachting;

var computerBeurt;
var verwachtingHoger;
var verwachtingLager;
var inzetVerhogen;
var inzetVerlagen;
var spelerBeurt;

var animatieOgen1;
var animatieOgen2;
var aantalKeer = 0;

function reageerOpLaden()
{
	var c = document.getElementById("mijnCanvas");
	var pen = c.getContext("2d");
	
	/*function pause()
	{
		window.alert("test");
	}
	
	window.setInterval(pause, 1000);*/
	
	computerBeurt = true;
	verwachtingHoger = false;
	verwachtingLager = false;
	inzetVerhogen = false;
	inzetVerlagen = false;
	spelerBeurt = false;
	
	//titel
	pen.fillStyle = "whiteSmoke";
	pen.font = "60px Arial";
	pen.textAlign = "center";
	pen.fillText("Hoger Lager",500,60)
	
	//dobbelstenen
	pen.fillStyle = "whiteSmoke";
	pen.fillRect(80,100,160,160);
	pen.fillRect(290,100,160,160);
	pen.fillRect(550,100,160,160);
	pen.fillRect(760,100,160,160);

	
	pen.strokeStyle = "black";
	pen.lineWidth = 3;
	pen.strokeRect(80,100,160,160);
	pen.strokeRect(290,100,160,160);
	pen.strokeRect(550,100,160,160);
	pen.strokeRect(760,100,160,160);
	
	//saldo clear rect
	pen.fillStyle = "#CF5C3F";
	pen.fillRect(300,300,600,200);
	
	//instructievakje
	pen.fillStyle = "#ddd";
	pen.fillRect(0,300,1000,75);
	
	pen.fillStyle = "black";
	pen.font = "50px Arial";
	pen.textAlign = "center";
	pen.fillText("Druk op Computer gooien.",500,355);
	pen.fill();
	
	//saldo
	pen.fillStyle = "whiteSmoke";
	pen.font = "50px Arial";
	pen.textAlign = "left";
	pen.fillText("Saldo: " + saldo, 200, 450);
	
	//inzet
	pen.fillText("Inzet: " + inzet, 600, 450);
	
	//Alert met instructies van de spel
	//window.alert("Welkom op Hoger Lager! In deze spel is het de bedoeling om zoveel mogelijk winst te maken door middel van geld in te leggen. Hieronder volgen de instructies:\n\n(1) Klik op \"Computer gooien\" om de dobbelstenen van de computer een waarde te geven.\n(2) Selecteer je verwachting, dus of je verwacht hoger of lager dan de computer te gooien.\n(3) Zet geld in naar wensen, met een minimuminzet van 10 punten.\n(4)Klik vervolgens op \"Speler gooien\" om je eigen dobbelstenen een waarde te geven.\n\nVeel speelplezier!");
}

function reageerOpComputerGooien()
{	
	if (computerBeurt == true)
	{
		verwachtingHoger = true;
		verwachtingLager = true;
		computerBeurt = false;
		
		var c = document.getElementById("mijnCanvas");
		var pen = c.getContext("2d");
		
		totaalSaldo = saldo;
		inzet = 0;
		
		//inzet
		pen.fillStyle = "#CF5C3F";
		pen.fillRect(550,400,400,100);
		
		pen.fillStyle = "whiteSmoke";
		pen.textAlign = "left";
		pen.font = "50px Arial";
		pen.fillText("Inzet: " + inzet, 600,450);
		
		//Computer-dobbelsteen inhoud wissen
		pen.fillStyle = "whiteSmoke";
		pen.fillRect(80,100,160,160);
		pen.fillRect(290,100,160,160);
		
		//Computer-dobbelsteen rand wissen
		pen.strokeStyle = "black";
		pen.lineWidth = 3;
		pen.strokeRect(80,100,160,160);
		pen.strokeRect(290,100,160,160);
		
		//Speler-dobbelsteen inhoud wissen
		pen.fillStyle = "whiteSmoke";
		pen.fillRect(550,100,160,160);
		pen.fillRect(760,100,160,160);
		
		//Speler-dobbelsteen rand wissen
		pen.strokeStyle = "black";
		pen.lineWidth = 3;
		pen.strokeRect(550,100,160,160);
		pen.strokeRect(760,100,160,160);
		
		/*for (var i=0; i<5; i++)
		{
			window.alert("Dit is de " + i + "/'e keer");
		}*/
		
		/*for (var i=0; i<5; i++)
		{
			window.setInterval(pause,100);
		}*/
		
			function pause()
			{
											
				//Computer-dobbelsteen inhoud wissen
				pen.fillStyle = "whiteSmoke";
				pen.fillRect(80,100,160,160);
				pen.fillRect(290,100,160,160);
				
				//Computer-dobbelsteen rand wissen
				pen.strokeStyle = "black";
				pen.lineWidth = 3;
				pen.strokeRect(80,100,160,160);
				pen.strokeRect(290,100,160,160);
				
				animatieOgen1 = Math.floor((Math.random()*6)+1);
				animatieOgen2 = Math.floor((Math.random()*6)+1);
				
				toonDobbelsteen1(1,animatieOgen1)
				
				function toonDobbelsteen1(nr, waarde)
				{
					switch (waarde)
					{
						case 1: toonOog1 (2,2);
						break;
						case 2: toonOog1 (1,1);
								toonOog1 (3,3);
						break;
						case 3: toonOog1 (1,1);
								toonOog1 (2,2);
								toonOog1 (3,3);
						break;
						case 4: toonOog1 (1,1);
								toonOog1 (3,1);
								toonOog1 (1,3);
								toonOog1 (3,3);
						break;
						case 5: toonOog1 (1,1);
								toonOog1 (3,1);
								toonOog1 (2,2);
								toonOog1 (1,3);
								toonOog1 (3,3);
						break;
						case 6: toonOog1 (1,1);
								toonOog1 (3,1);
								toonOog1 (1,2);
								toonOog1 (3,2);
								toonOog1 (1,3);
								toonOog1 (3,3);
						break;
					}
				}
					
				function toonOog1(x,y)
				{
					var c = document.getElementById("mijnCanvas");
					var pen = c.getContext("2d");
					
					pen.fillStyle = "black";
					pen.beginPath();
					pen.arc(80+x*(160/4), 100+y*(160/4), 12, 0, 2 * Math.PI);
					pen.fill();
				}
				
				toonDobbelsteen2(1, animatieOgen2)
		
				function toonDobbelsteen2(nr, waarde)
				{
					switch (waarde)
					{
					case 1: toonOog2 (2,2);
					break;
					case 2: toonOog2 (1,1);
							toonOog2 (3,3);
					break;
					case 3: toonOog2 (1,1);
							toonOog2 (2,2);
							toonOog2 (3,3);
					break;
					case 4: toonOog2 (1,1);
							toonOog2 (3,1);
							toonOog2 (1,3);
							toonOog2 (3,3);
					break;
					case 5: toonOog2 (1,1);
							toonOog2 (3,1);
							toonOog2 (2,2);
							toonOog2 (1,3);
							toonOog2 (3,3);
					break;
					case 6: toonOog2 (1,1);
							toonOog2 (3,1);
							toonOog2 (1,2);
							toonOog2 (3,2);
							toonOog2 (1,3);
							toonOog2 (3,3);
					break;
					}
				}
		
				function toonOog2(x,y)
				{
					var c = document.getElementById("mijnCanvas");
					var pen = c.getContext("2d");
					
					pen.fillStyle = "black";
					pen.beginPath();
					pen.arc(290+x*(160/4), 100+y*(160/4), 12, 0, 2 * Math.PI);
					pen.fill();
				}	

				
			}
		
		
		var aantalOgenComputer1 = Math.floor((Math.random()*6)+1);
		var aantalOgenComputer2 = Math.floor((Math.random()*6)+1);
		totaalAantalOgenComputer = aantalOgenComputer1 + aantalOgenComputer2;
		
		toonDobbelsteen1(1, aantalOgenComputer1)
		
		function toonDobbelsteen1(nr, waarde)
		{
		
			switch(nr)
			{
				case 1: dobbelsteenAfstand = 80;
						break;
				case 2:	dobbelsteenAfstand = 290;
				
			}
		
			switch (waarde)
			{
			case 1: toonOog1 (2,2);
			break;
			case 2: toonOog1 (1,1);
					toonOog1 (3,3);
			break;
			case 3: toonOog1 (1,1);
					toonOog1 (2,2);
					toonOog1 (3,3);
			break;
			case 4: toonOog1 (1,1);
					toonOog1 (3,1);
					toonOog1 (1,3);
					toonOog1 (3,3);
			break;
			case 5: toonOog1 (1,1);
					toonOog1 (3,1);
					toonOog1 (2,2);
					toonOog1 (1,3);
					toonOog1 (3,3);
			break;
			case 6: toonOog1 (1,1);
					toonOog1 (3,1);
					toonOog1 (1,2);
					toonOog1 (3,2);
					toonOog1 (1,3);
					toonOog1 (3,3);
			break;
			}
		}
		
		function toonOog1(x,y)
		{
			var c = document.getElementById("mijnCanvas");
			var pen = c.getContext("2d");
			
			pen.fillStyle = "black";
			pen.beginPath();
			pen.arc(80+x*(160/4), 100+y*(160/4), 12, 0, 2 * Math.PI);
			pen.fill();
		}
		
		toonDobbelsteen2(1, aantalOgenComputer2)
		
		function toonDobbelsteen2(nr, waarde)
		{
			switch (waarde)
			{
			case 1: toonOog2 (2,2);
			break;
			case 2: toonOog2 (1,1);
					toonOog2 (3,3);
			break;
			case 3: toonOog2 (1,1);
					toonOog2 (2,2);
					toonOog2 (3,3);
			break;
			case 4: toonOog2 (1,1);
					toonOog2 (3,1);
					toonOog2 (1,3);
					toonOog2 (3,3);
			break;
			case 5: toonOog2 (1,1);
					toonOog2 (3,1);
					toonOog2 (2,2);
					toonOog2 (1,3);
					toonOog2 (3,3);
			break;
			case 6: toonOog2 (1,1);
					toonOog2 (3,1);
					toonOog2 (1,2);
					toonOog2 (3,2);
					toonOog2 (1,3);
					toonOog2 (3,3);
			break;
			}
		}
		
		function toonOog2(x,y)
		{
			var c = document.getElementById("mijnCanvas");
			var pen = c.getContext("2d");
			
			pen.fillStyle = "black";
			pen.beginPath();
			pen.arc(290+x*(160/4), 100+y*(160/4), 12, 0, 2 * Math.PI);
			pen.fill();
		}	
	}
	else
	{
	
	}
	
	//instructievakje
	pen.fillStyle = "#ddd";
	pen.fillRect(0,300,1000,75);
	
	pen.fillStyle = "black";
	pen.font = "50px Arial";
	pen.textAlign = "center";
	pen.fillText("Selecteer je verwachting.",500,355);
	pen.fill();
}

function reageerOpHogerVerwachten()
{
	if (verwachtingHoger == true)
	{
		inzetVerhogen = true;
		inzetVerlagen = true;
		verwachting = true;
		
		//instructievakje
		var c = document.getElementById("mijnCanvas");
		var pen = c.getContext("2d");
		pen.fillStyle = "#ddd";
		pen.fillRect(0,300,1000,75);
		
		pen.fillStyle = "black";
		pen.font = "50px Arial";
		pen.textAlign = "center";
		pen.fillText("Zet geld in.",500,355);
		pen.fill();
	}
	else
	{
	
	}
}

function reageerOpLagerVerwachten()
{
	if (verwachtingLager == true)
	{
		inzetVerhogen = true;
		inzetVerlagen = true;
		verwachting = false;
		
		//instructievakje
		var c = document.getElementById("mijnCanvas");
		var pen = c.getContext("2d");
		pen.fillStyle = "#ddd";
		pen.fillRect(0,300,1000,75);
		
		pen.fillStyle = "black";
		pen.font = "50px Arial";
		pen.textAlign = "center";
		pen.fillText("Zet geld in.",500,355);
		pen.fill();
	}
	else
	{
	
	}
}

function reageerOpInzetVerhogen()
{
	if (inzetVerhogen == true && saldo > 0)
	{
		spelerBeurt = true;
		
		var c = document.getElementById("mijnCanvas");
		var pen = c.getContext("2d");
		
		inzet = inzet + 10;
		saldo = saldo - 10;

		pen.fillStyle = "#CF5C3F";
		pen.fillRect(250,400,400,100);
		pen.fillRect(550,400,400,100);
		
		pen.fillStyle = "whiteSmoke";
		pen.textAlign = "left";
		pen.font = "50px Arial";
		
		//inzet
		pen.fillText("Inzet: " + inzet, 600,450);
		
		//saldo
		pen.fillText("Saldo: " + saldo, 200, 450);
		
		//instructievakje
		pen.fillStyle = "#ddd";
		pen.fillRect(0,300,1000,75);
		
		pen.fillStyle = "black";
		pen.font = "50px Arial";
		pen.textAlign = "center";
		pen.fillText("Druk op Speler gooien.",500,355);
		pen.fill();
	}
	else
	{
	
	}
}

function reageerOpInzetVerlagen()
{
	if (inzetVerlagen == true && inzet >= 10)
	{
		spelerBeurt = true;
		
		var c = document.getElementById("mijnCanvas");
		var pen = c.getContext("2d");
		
		inzet = inzet - 10;
		saldo = saldo + 10;

		pen.fillStyle = "#CF5C3F";
		pen.fillRect(250,400,400,100);
		pen.fillRect(550,400,400,100);
		
		pen.fillStyle = "whiteSmoke";
		pen.textAlign = "left";
		pen.font = "50px Arial";
		
		//inzet
		pen.fillText("Inzet: " + inzet, 600,450);
		
		//saldo
		pen.fillText("Saldo: " + saldo, 200, 450);
		
		//instructievakje
		pen.fillStyle = "#ddd";
		pen.fillRect(0,300,1000,75);
	
		pen.fillStyle = "black";
		pen.font = "50px Arial";
		pen.textAlign = "center";
		pen.fillText("Druk op Speler gooien.",500,355);
		pen.fill();
	}
	else
	{

	}
	
	if (inzet == 0)
	{
		//instructievakje
		pen.fillStyle = "#ddd";
		pen.fillRect(0,300,1000,75);
		
		pen.fillStyle = "black";
		pen.font = "50px Arial";
		pen.textAlign = "center";
		pen.fillText("Zet geld in.",500,355);
		pen.fill();
	}
	else
	{
	
	}
}

function reageerOpSpelerGooien()
{
	if (spelerBeurt == true && inzet >= 10)
	{
		computerBeurt = true;
		verwachtingHoger = false;
		verwachtingLager = false;
		inzetVerhogen = false;
		inzetVerlagen = false;
		spelerBeurt = false;
		
		var c = document.getElementById("mijnCanvas");
		var pen = c.getContext("2d");		
		
		//Speler-dobbelsteen inhoud wissen
		pen.fillStyle = "whiteSmoke";
		pen.fillRect(550,100,160,160);
		pen.fillRect(760,100,160,160);
		
		//Speler-dobbelsteen rand wissen
		pen.strokeStyle = "black";
		pen.lineWidth = 3;
		pen.strokeRect(550,100,160,160);
		pen.strokeRect(760,100,160,160);

		pen.fillStyle = "#CF5C3F";
		pen.fillRect(180,400,300,100);	
		
		var aantalOgenSpeler1 = Math.floor((Math.random()*6)+1);
		var aantalOgenSpeler2 = Math.floor((Math.random()*6)+1);
		totaalAantalOgenSpeler = aantalOgenSpeler1 + aantalOgenSpeler2;
		
		toonDobbelsteen1(1, aantalOgenSpeler1)
		
		function toonDobbelsteen1(nr, waarde)
		{
			switch (waarde)
			{
				case 1: toonOog1 (2,2);
						break;
				case 2: toonOog1 (1,1);
						toonOog1 (3,3);
						break;
				case 3: toonOog1 (1,1);
						toonOog1 (2,2);
						toonOog1 (3,3);
				break;
				case 4: toonOog1 (1,1);
						toonOog1 (3,1);
						toonOog1 (1,3);
						toonOog1 (3,3);
				break;
				case 5: toonOog1 (1,1);
						toonOog1 (3,1);
						toonOog1 (2,2);
						toonOog1 (1,3);
						toonOog1 (3,3);
				break;
				case 6: toonOog1 (1,1);
						toonOog1 (3,1);
						toonOog1 (1,2);
						toonOog1 (3,2);
						toonOog1 (1,3);
						toonOog1 (3,3);
				break;
			}
		}
		
		function toonOog1(x,y)
		{
			var c = document.getElementById("mijnCanvas");
			var pen = c.getContext("2d");
			
			pen.fillStyle = "black";
			pen.beginPath();
			pen.arc(550+x*(160/4), 100+y*(160/4), 12, 0, 2 * Math.PI);
			pen.fill();
		}
		
		toonDobbelsteen2(1, aantalOgenSpeler2);
		
		function toonDobbelsteen2(nr, waarde)
		{
			switch (waarde)
			{
			case 1: toonOog2 (2,2);
			break;
			case 2: toonOog2 (1,1);
					toonOog2 (3,3);
			break;
			case 3: toonOog2 (1,1);
					toonOog2 (2,2);
					toonOog2 (3,3);
			break;
			case 4: toonOog2 (1,1);
					toonOog2 (3,1);
					toonOog2 (1,3);
					toonOog2 (3,3);
			break;
			case 5: toonOog2 (1,1);
					toonOog2 (3,1);
					toonOog2 (2,2);
					toonOog2 (1,3);
					toonOog2 (3,3);
			break;
			case 6: toonOog2 (1,1);
					toonOog2 (3,1);
					toonOog2 (1,2);
					toonOog2 (3,2);
					toonOog2 (1,3);
					toonOog2 (3,3);
			break;
			}
		}
		
		function toonOog2(x,y)
		{
			var c = document.getElementById("mijnCanvas");
			var pen = c.getContext("2d");
			
			pen.fillStyle = "black";
			pen.beginPath();
			pen.arc(760+x*(160/4), 100+y*(160/4), 12, 0, 2 * Math.PI);
			pen.fill();
		}	
		
		if (verwachting == true && totaalAantalOgenSpeler > totaalAantalOgenComputer || verwachting == false && totaalAantalOgenSpeler < totaalAantalOgenComputer)
		{
			saldo = totaalSaldo + inzet;
			
			//instructievakje
			pen.fillStyle = "#ddd";
			pen.fillRect(0,300,1000,75);
		
			pen.fillStyle = "black";
			pen.font = "40px Arial";
			pen.textAlign = "center";
			pen.fillText("U hebt gewonnen! Druk op Computer gooien.",500,355);
			pen.fill();
		}
		else
		{
			saldo = totaalSaldo - inzet;
			
			//instructievakje
			pen.fillStyle = "#ddd";
			pen.fillRect(0,300,1000,75);
		
			pen.fillStyle = "black";
			pen.font = "40px Arial";
			pen.textAlign = "center";
			pen.fillText("U hebt verloren. Druk op Computer gooien.",500,355);
			pen.fill();
		}
		
		/*//instructievakje
		pen.fillStyle = "#ddd";
		pen.fillRect(0,300,1000,75);*/
		
		//inzet
		inzet = 0;
		pen.fillStyle = "#CF5C3F";
		pen.fillRect(550,400,400,100);
		pen.fillStyle = "whiteSmoke";
		pen.font = "50px Arial";
		pen.textAlign = "left";
		pen.fillText("Inzet: " + inzet, 600,450);
		
		//saldo
		pen.fillText("Saldo: " + saldo, 200, 450);
		
		/*pen.fillStyle = "black";
		pen.font = "50px Arial";
		pen.textAlign = "center";
		pen.fillText("Druk op Computer gooien.",500,355);
		pen.fill();*/
		
		//reset spel wanneer geen saldo meer over is.
		if (saldo == 0)
		{
			computerBeurt = true;
			verwachtingHoger = false;
			verwachtingLager = false;
			inzetVerhogen = false;
			inzetVerlagen = false;
			spelerBeurt = false;
			
			window.alert("U bent blut! Het spel begint opnieuw.");

			saldo = 100;
			inzet = 0;
			totaalSaldo = saldo;
			
			//instructievakje
			pen.fillStyle = "#ddd";
			pen.fillRect(0,300,1000,75);
			
			pen.fillStyle = "black";
			pen.font = "50px Arial";
			pen.textAlign = "center";
			pen.fillText("Druk op Computer gooien.",500,355);
			pen.fill();
			
			//inzet en saldo reset
			pen.fillStyle = "#CF5C3F";
			pen.fillRect(250,400,400,100);
			pen.fillRect(550,400,400,100);
			
			pen.fillStyle = "whiteSmoke";
			pen.textAlign = "left";
			pen.font = "50px Arial";
			
			pen.fillText("Saldo: " + saldo, 200, 450);
			pen.fillText("Inzet: " + inzet, 600,450);
			
			//Computer-dobbelsteen inhoud wissen
			pen.fillStyle = "whiteSmoke";
			pen.fillRect(80,100,160,160);
			pen.fillRect(290,100,160,160);
			
			//Computer-dobbelsteen rand wissen
			pen.strokeStyle = "black";
			pen.lineWidth = 3;
			pen.strokeRect(80,100,160,160);
			pen.strokeRect(290,100,160,160);
			
			//Speler-dobbelsteen inhoud wissen
			pen.fillStyle = "whiteSmoke";
			pen.fillRect(550,100,160,160);
			pen.fillRect(760,100,160,160);
			
			//Speler-dobbelsteen rand wissen
			pen.strokeStyle = "black";
			pen.lineWidth = 3;
			pen.strokeRect(550,100,160,160);
			pen.strokeRect(760,100,160,160);
			
		}
	}
	else
	{
	
	}
}
