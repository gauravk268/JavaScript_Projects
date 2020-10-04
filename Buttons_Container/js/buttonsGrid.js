var btn5=document.getElementById("btn5");
var e=[1, 2, 3, 6, 9, 8, 7, 4];
var o=[1, 2, 3, 6, 9, 8, 7, 4];
var count=0;

document.getElementById("btn5").innerHTML=5;
for(var i=0; i<8; i++)
{
    document.getElementById("btn"+o[i]).innerHTML=o[i];
}

btn5.onclick = function()
{
    count++;
    for(var i=0; i<8; i++)
    {   
        var change=i+count;
        if(change<0)    change= (change* (-1))%8;
        else change%=8;
        
        document.getElementById("btn"+o[i]).innerHTML=e[change];
    }
};