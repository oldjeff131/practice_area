var hour,minet;
function ShowTime()
{
    nowtime=new Date()
    document.getElementById("NowTime").innerHTML=nowtime;
    setTimeout('ShowTime()',1000);
}
function check()
{
    hour= document.getElementById("numhur").value;
    minet= document.getElementById("nummin").value;
    if(isNumber(hour)==true&isNumber(minet)==true)
    {
        if(hour>0 & hour<23 & minet>0 & minet<59 & hour!="" & minet!="")
        {
            document.getElementById("checktext").innerHTML="設定時間:("+hour+"："+minet+")";
            checktime();
        }
        else
        {
            document.getElementById("checktext").innerHTML="填入錯誤，請重新填入";
        }
    }
    else
    {
        document.getElementById("checktext").innerHTML="只能填入數字，請重新填入";
    }
    
}
function checktime()
{
    if(hour<=nowtime.getHours() & minet<=nowtime.getMinutes())
    {
        document.getElementById("demo").innerHTML="時間已經到了";
    }
    else
    {
        document.getElementById("demo").innerHTML="時間到了";
    }
}
function isNumber(val)
{
    return !isNaN(val)
}

