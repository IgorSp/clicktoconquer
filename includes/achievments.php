<style>
#atball {
	position: relative;
	left:100px;
	top:-80px;
}
#intall {
		position: relative;
	left:10px;
	top:-60px;
	 
}
#strall {
		position: relative;
	left: 150px;
	top: -83.2px;
}
#defall {
		position: relative;
	left: 34px;
	top: -65.5px;
}
#agall {
		position: relative;
	left: 168px;
	top: -89.5px;
}
.achbuttons {
		-moz-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	-webkit-box-shadow:inset 0px 1px 3px 0px #91b8b3;
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#6c7c7c',GradientType=0);
	background-color:#000000;
	-moz-border-radius:5px;
	-webkit-border-radius:5px;
	border-radius:5px;
	border:2px solid #566963;
	display:inline;
	cursor:pointer;
	color:#ffffff;
	font-family:arial;
	font-size:15px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px -1px 0px #2b665e;
    margin: 0;
    padding: 0px;
    border: none;
    padding: 0;
}
.achbuttons:active, .achbuttons:focus {
    padding:0px;
    margin:0px;
    border: none;
    outline:none;
    text-indent: 0;
}
@media all and (max-width: 1200px) and (min-width: 480px) {
#achievpage {
	width:23%;
}
#allachbuttons {
	width:20%;
}
#achbutton1,#achbutton2,#achbutton3,#achbutton4 {
	font-size:10px;
}
}
</style>
<script>
		var atimer1 = setInterval(function(){if(achievments==true) achievPage();else clearInterval(atimer1)},1200);
	$(function() {
	   $( allachbuttons ).tooltip({	
	      autoOpen: true,	
		  track:true,
        open: function (event, ui) {
            setTimeout(function () {
                $(ui.tooltip).hide('explode');
            }, 2000);
        }
		});
	});
	
hideThis('achbutton1');
hideThis('achbutton2');
hideThis('achbutton3');
hideThis('achbutton4');
function abp(event) {	
		if (event.target.name=="intelligence") {
			if(game.attribute>0) {
game.attribute-=1;
game.intelligence+=1; }
		}
			else if (event.target.name=="strength") {
			if(game.attribute>0) {
game.attribute-=1;
game.strength+=1; }
			}
			else if (event.target.name=="defense") {
			if(game.attribute>0) {
game.attribute-=1;
game.defense+=1; }
			}
			else if (event.target.name=="agility") {
			if(game.attribute>0) {
game.attribute-=1;
game.agility+=1; }
			}
}
		
		function achievPage()
		{
			 getId('abpoints').innerHTML=game.attribute;
			 getId('intpoints').innerHTML=game.intelligence;
			 getId('strpoints').innerHTML=game.strength;
			 getId('defpoints').innerHTML=game.defense;
			 getId('agpoints').innerHTML=game.agility;
			 if(game.ach1==1) {
			 getId('achbutton1').style.visibility = 'visible'; 
			 getId('noachiv').style.visibility = 'hidden'; }
			 if(game.ach2==1)
				 getId('achbutton2').style.visibility = 'visible';
		 if(game.ach3==1)
				 getId('achbutton3').style.visibility = 'visible'; 
		 if(game.ach4==1)
				 getId('achbutton4').style.visibility = 'visible'; 			 
		}
		
		
</script>
<div id="achievpage"><div id="atball">
<font color="orange" size="2">Attribute Points:</font> <font color="red" size="2"><class id="abpoints">0</class></font>
</div>
<div id="intall">
<font color="#9900CC" size="2">Intelligence: <class name="intpoints" id="intpoints">0</class>
<input type="button"  id="intelligence" name="intelligence" class="intelligence" input title="+1 Intelligence" value="+" src="bt1.jpg" onClick="abp(event)">
</div>
<div id="strall">
Strength: <class name="strpoints" id="strpoints">0</class>
<input type="button"  id="strength" name="strength" class="strength" input title="+1 Strength" value="+" src="bt1.jpg" onClick="abp(event)">
</div>
<div id="defall">
Defense: <class name="defpoints" id="defpoints">0</class>
<input type="button"  id="defense" name="defense" class="defense" input title="+1 Defense" value="+" src="bt1.jpg" onClick="abp(event)">
</div>
<div id="agall">
Agility: <class name="agpoints" id="agpoints">0</class>
<input type="button"  id="agility" name="agility" class="agility" input title="+1 Agility" value="+" src="bt1.jpg" onClick="abp(event)">
</font>
</div>
<font color="red" size="2">Achievments:<br><br></font>
<div id="noachiv"><font color="#FFFF66"><b>You have no achievments so far.</font></b></div>
<div id="allachbuttons">
<input type="button" style="width:50;height:30" id ="achbutton1" name="achbutton1" class="achbuttons" input title="Reaching Lvl 1" value="Lvl 1">
<input type="button" style="width:65;height:30" id ="achbutton4" name="achbutton4" class="achbuttons" input title="Having 1,000 gold" value="1k gold">
<input type="button" style="width:50;height:30" id ="achbutton2" name="achbutton2" class="achbuttons" input title="Reaching Lvl 10" value="Lvl 10">
<input type="button" style="width:80;height:30" id ="achbutton3" name="achbutton3" class="achbuttons" input title="Building army of 20 knights" value="20 knights">
</div>
</div>