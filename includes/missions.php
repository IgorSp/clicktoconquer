  <style>
.right {
    float:right;
}
.hide {
    display:none
}
#missionsPage {
position: absolute;
width: 50%;
}
@media all and (max-width: 1200px) and (min-width: 480px) {
#missionsPage {
position: absolute;
width:50%;
}	
}
</style>
<script>
	var mtimer1 = setInterval(function(){if(missions==true) missionsPage();else clearInterval(mtimer1)},200);
function toggle_messege(type) {
 document.getElementById("mmessage1").style.display = type;
    document.getElementById("mclose1").style.display = type; 
}
function toggle_messege2(type) {
 document.getElementById("mmessage2").style.display = type;
    document.getElementById("mclose2").style.display = type; 
}
if(game.m1dur!=0)
	   getId('mission1').style.visibility = 'hidden';
   if(game.m2dur!=0)
	      getId('mission2').style.visibility = 'hidden';
	  
		function missionsPage() {
		      getId('firstmission').innerHTML="Time left: "+Math.floor(game.s1 / 60)+" minute(s) and "+game.s1 % 60+" second(s).";
			   getId('secondmission').innerHTML="Time left: "+Math.floor(game.s2 / 60)+" minute(s) and "+game.s2 % 60+" second(s).";
			  
			  			if(game.m1not==0 && game.m1dur == 0)
					hideThis('firstmission');
				
				if(game.m1did==1) {
				 hideThis('mission1');
				  hideThis('mclose1');
				   hideThis('mmessage1');
				    hideThis('mabout1');
					hideThis('firstmission');
				getId('m1inf').innerHTML="Mission 1: Collect the tribute.<font color='green'><br>[Completed]</font>"; }
				
				////
				
				if(game.m2not==0 && game.m2dur == 0)
					hideThis('secondmission');
				
				if(game.m2did==1) {
				 hideThis('mission2');
				  hideThis('mclose2');
				   hideThis('mmessage2');
				    hideThis('mabout2');
					hideThis('secondmission');
				getId('m2inf').innerHTML="Mission 2: Plunder small village.<font color='green'><br>[Completed]</font>"; }
			  
		}
		
</script>
<div id="missionsPage">
<font color="red" size="3">Available Missions:</font><br><br><br>
<div id="mission">
<j id="m1inf">Mission 1: Collect the tribute<br><br></j>
<input type="button" id="mission1" value="Start Mission" onClick="miss1()">
<a class="right" href="javascript:toggle_messege('inline')" id='mabout1'> About </a>
<br />
<a class="right hide" href="javascript:toggle_messege('none')" id='mclose1'> (Close)</a>
<div id='mmessage1' class='hide'><font color="orange"><b><u>Duration</u>: 5 minutes. <br> <u>Minimum requirements</u>: 5 knights and 500 gold.<br>
<u>Cost</u>: 0 gold<br><u>Possible loss</u>: Nothing.<br><u>Reward</u>: 1000 gold</b><br></div>
<j id="firstmission">Time left: 0</j><br><br><br><br>
<j id="m2inf">Mission 2: Plunder small village<br><br></j>
<input type="button" id="mission2" value="Start Mission" onClick="miss2()">
<a class="right" href="javascript:toggle_messege2('inline')" id='mabout2'> About </a>
<br />
<a class="right hide" href="javascript:toggle_messege2('none')" id='mclose2'> (Close)</a>
<div id='mmessage2' class='hide'><font color="orange"><b><u>Duration</u>: 15 minutes. <br> <u>Minimum requirements</u>: 10 knights, 5 archers, 2 mages,<br> 2 Intelligence points, 3 strength points and 2500 gold.<br>
<u>Cost</u>: 2500 gold<br><u>Possible loss</u>: Nothing or [250-1800$]<br><u>Reward</u>: 8000 gold and 500xp</b><br></div>
<j id="secondmission">Time left: 0</j><br>
</div>
</div>