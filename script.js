var hour=0;
var min=0;
var secs=0;
var millisecs=0;
var timer=false;


function start(){
   timer=true;
   stopwatch();

}

function stop(){
timer=false;

}

function reset(){
timer=false;
hour=0;
min=0;
secs=0;
millisecs=0;

document.getElementById('hour').innerHTML="00" + " :";
document.getElementById("min").innerHTML="00"+ " :";
document.getElementById("secs").innerHTML="00"+ " :";
document.getElementById("millisecs").innerHTML="00";
}

function stopwatch(){
    if(timer==true){
       millisecs=millisecs+1;

       if(millisecs==100){
        secs=secs+1;
        millisecs=0;
       }
        if(secs == 60){
            min= min+1;
            secs=0;
        }

        if(min==60){
            hour=hour+1;
            min=0;
            secs=0;
        }
  var hourString=hour;
  var minString=min;
  var secsString=secs;
  var millisecsString= millisecs;
        if(hour<10){
            hourString="0"+hour;
        }

        if(min<10){
            minString="0"+min;
        }

        if(secs<10){
            secsString="0"+secs;
        }

        if(millisecs<10){
            millisecsString="0"+millisecs;
        }
        document.getElementById('hour').innerHTML=hourString+ " :";
        document.getElementById("min").innerHTML=minString +" :";
        document.getElementById("secs").innerHTML=secsString+" :";
        document.getElementById("millisecs").innerHTML=millisecsString;
       
        setTimeout("stopwatch()", 10)

    }
}
