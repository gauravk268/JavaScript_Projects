var a=0, b=0, result=0, i=0;
var output="", op="=";

function disp()
{
	document.getElementById("res").innerHTML=output;
}

function clear()
{
	a=0, b=0, i=0, result=0, output="", op="=";
}

function clickZero()
{	
	if(op=="=")	a=(a<<1);
	else	b=(b<<1);
	
	i++;
	output+="0";
	disp();
}

function clickOne()
{
	if(op=="=")	a+= (1<<i);
	else	b+= (1<<i);
	
	i++;
	output+="1";
	disp();
}

function clickClr()
{
	a=0, b=0, i=0, result=0, output="", op="=";
	disp();	
}

function clickEql()
{
	switch(op)
	{
		case "+":
			result=a+b;
			break;
		case "-":
			result=a-b;
			break;
		case "*":
			result=a*b;
			break;
		case "/":
			result=a/b;
			break;
		default:
			output="";
			a=0;
			b=0;
			op="=";
			disp();
			return;
	}
	
	output=""+((result >>> 0).toString(2));
	console.log(a+" : "+b+" : "+result);
	disp();
	op="=";
	a=0; b=0; i=0; result=0;
}

function clickSum()
{
	if(op=="=")
	{
		output+=" + ";
		disp();
	}
	else
	{	
		output="SYNTAX ERROR";
		disp();
	}
	
	op="+";
	i=0;
}

function clickSub()
{
	if(op == "=")
	{
		output+=" - ";
		disp();
	}
	else
	{
		output="SYNTAX ERROR";
		disp();
	}
	
	op="-";
	i=0;
}

function clickMul()
{
	if(op == "=")
	{
		output+=" * ";
		disp();
	}
	else
	{
		output="SYNTAX ERROR";
		disp();
	}
	
	op="*";
	i=0;
}

function clickDiv()
{
	if(op == "=")
	{
		output+=" / ";
		disp();
	}
	else
	{
		output="SYNTAX ERROR";
		disp();
	}
	
	op="/";
	i=0;
}