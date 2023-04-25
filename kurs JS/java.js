var timer1 = 0;
var timer2 = 0;

function refresh()
{
	var time = new Date();
	
	var day = time.getDate();
	if(day<10) day = "0" + day;
	var month = time.getMonth()+1;
	if(month<10) month = "0" + month;
	var year = time.getFullYear();
	if(year<10) year = "0" + year;
	
	var hour = time.getHours();
	if(hour<10) hour = "0" + hour;
	var min = time.getMinutes();
	if(min<10) min = "0" + min;
	var sec = time.getSeconds();
	if (sec<10) sec = "0" + sec;
	
	document.getElementById("clock").innerHTML =
	day + "." + month + "." + year + " " + hour + ":" + min + ":" + sec;
	
	setTimeout("refresh()",1000);
}

function check()
{
	var number = document.getElementById("pole").value;
	
	if (number>0) document.getElementById("wynik").innerHTML = "Dodatnia";
	else if (number < 0) document.getElementById("wynik").innerHTML = "Ujemna";
	else if (number == 0) document.getElementById("wynik").innerHTML = "Zero";
	else document.getElementById("wynik").innerHTML = "Error";
}
/*------------------------------------------------------------------------------*/
function wypisz()
{
	var number1 = document.getElementById("wart1").value;
	var number2 = document.getElementById("wart2").value;
	var nmb = "";
	if (!isNaN(number1) && !isNaN(number2))
	{
		if (number1>number2) 
		{
			
			for(i=number1; i >= number2;i--)
			{
				nmb = nmb + i + " ";
			}
			
			document.getElementById("wynik2").innerHTML = nmb;
		}
		else if (number1<number2)
		{
			for(i=number1; i<=number2;i++)
			{
				nmb = nmb + i + " ";
			}
			document.getElementById("wynik2").innerHTML = nmb;
		}
		else 
		{
			document.getElementById("wynik2").innerHTML = " No cos jest nie tak";
		}
	}
	else if (!isNaN(number1) && isNaN(number2))
	{
		document.getElementById("wynik2").innerHTML = " Prawa strona nie jest liczba";
	}
	else if (isNaN(number1) && !isNaN(number2))
	{
		document.getElementById("wynik2").innerHTML = "Lewa strona nie jest lcizba";
	}
	else 
	{
		document.getElementById("wynik2").innerHTML = " Obie strony nie sa liczba";
	}
	
}
/*----------------------------------------------------------------------------------*/

var slide = Math.floor(Math.random()*5)+1;

function schowaj()
{
	$("#slider").fadeOut(500);
}

function change()
{
	slide++; if (slide>5) slide = 1;
	
	var file = "<img src=\"png/" + slide + ".png\"/>";
	
	document.getElementById("slider").innerHTML = file;
	$("#slider").fadeIn(500);
	
	timer1 = setTimeout("change()", 5000);
	timer2 = setTimeout("schowaj()", 4500);
}

function set(number)
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	slide = number - 1;
	
	schowaj();
	setTimeout("change()", 500);
} 