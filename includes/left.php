<style>
#leftside {
 position: absolute;
    top: 30%;
    left: 1%;
width:40%;
z-index: 11;
}

#ads {
	position: absolute;
}
@media all and (max-width: 1200px) and (min-width: 480px) {
#leftside {
 position: absolute;
    top: 25%;
    left: 1%;
width:40%;
z-index: 11;
}
}
</style>
<script language="javascript">
var ltimer1 = setInterval(function(){payPage()},200);
function payPage() {
				 getId('abpoints').innerHTML=game.attribute;
			 getId('intpoints').innerHTML=game.intelligence;
			 getId('strpoints').innerHTML=game.strength;
			 getId('defpoints').innerHTML=game.defense;
			 getId('agpoints').innerHTML=game.agility;
	
	var payment = (game.knight*1)+(game.archer*5)+(game.mage*8)+(game.longbowman*10)+(game.paladin*12)+(game.halberdier*15)+(game.horsemen*25);
	var earning = (game.tavern*1.0)+(game.archery*1.8)+(game.mageguild*2.6)+(game.barracks*3.8)+(game.garrison*5.0);
	var overxp = (game.knight*1)+(game.archer*1)+(game.mage*1)+(game.longbowman*1)+(game.paladin*1)+(game.halberdier*1)+(game.horsemen*2);
getId('armypay').innerHTML=(payment).toFixed(1)+" gold/10s  |  "+(payment/10).toFixed(1)+" gold/s";
getId('earnings').innerHTML=(earning).toFixed(1)+" gold/s";
getId('expincome').innerHTML=Beautify(overxp)+" exp/10s   |   "+(overxp/10).toFixed(1)+" exp/s";
if((payment/10)>earning)
getId('overallincome').innerHTML="-"+((payment/10)-earning).toFixed(1)+" gold/s";
else
getId('overallincome').innerHTML=(earning-(payment/10)).toFixed(1)+" gold/s";
}
</script>
<div id="leftside">
<font color="orange" size="2">Attribute Points:</font> <font color="red" size="2"><class id="abpoints">0</class></font><br>
<font color="#9900CC" size="2">Intelligence: <class name="intpoints" id="intpoints">0</class><br>
Strength: <class name="strpoints" id="strpoints">0</class><br>
Defense: <class name="defpoints" id="defpoints">0</class><br>
Agility: <class name="agpoints" id="agpoints">0</class><br></font>
<br>
<font color="red" size="3">You pay your army:</font><br><k id="armypay">0 gold/s</k>
<br><br>
<font color="red" size="3">From Buildings you earn:</font><br><k id="earnings">0 gold/s</k>
<br><br>
<font color="red" size="3">Overall gold You get:</font><br><k id="overallincome">0 gold/s</k>
<br><br>
<font color="red" size="3">Experience You get:</font><br><k id="expincome">0 exp/10s</k>
</div>

