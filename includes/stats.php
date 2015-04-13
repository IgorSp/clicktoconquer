<style>
#statspage {
	position: absolute;
	top: -70px;
	
}
#buildstats {
	position: relative;
	left:90px;
}
#yourbuild {
	position: relative;
	left:120px;
}
@media all and (max-width: 1200px) and (min-width: 480px) {
	#statspage {
	position: absolute;
	top: -70px;
	width:100%;
	font-size:5px;
}
#buildstats {
	position: relative;
	left:40px;
}
#yourbuild {
	position: relative;
	left:90px;
}
}
</style>
<script>
var stimer1 = setInterval(function(){if(stats==true) statsPage();else clearInterval(stimer1)},200);
		
		function statsPage()
		{
			 getId('overall').innerHTML=Beautify(game.overall)+" gold";
		getId('expoverall').innerHTML=Beautify(game.lvlxp)+" xp"; 
		getId('gperclick').innerHTML=(game.clickcount).toFixed(1); 
		 getId('armyk').innerHTML=game.knight;
		  getId('armyar').innerHTML=game.archer;
		   getId('armym').innerHTML=game.mage;
		   
		   getId('armylg').innerHTML=game.longbowman;
		     getId('armyp').innerHTML=game.paladin;
			   getId('armyhl').innerHTML=game.halberdier;
			     getId('armyhr').innerHTML=game.horsemen;
				 
				  getId('buildt').innerHTML=game.tavern;
		     getId('buildar').innerHTML=game.archery;
			   getId('buildmg').innerHTML=game.mageguild;
			     getId('buildbr').innerHTML=game.barracks;
getId('buildgr').innerHTML=game.garrison;
   var seconds = game.alltime % 60;
    var minutes = Math.floor(game.alltime / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;
 
		    getId('timeoverall').innerHTML=hours+" hour(s), "+minutes+" minute(s)<br> and "+seconds+" second(s).";
			
			getId('overallpayment').innerHTML=(game.overallpay).toFixed(1)+" gold";
			getId('overallearnings').innerHTML=(game.overallearn).toFixed(1)+" gold";
					
		}
</script>
<div id="statspage">
<j>Total gold income:</j><k id="overall">0 gold</k><br>
<j>Gold per click:</j><k id="gperclick">0 gold per second</k><br>
<j>Overall Exp:</j><k id="expoverall">0 xp</k><br>
<j>Overall You paid:</j><k id="overallpayment">0 gold</k><br>
<j>Overall You earned:</j><k id="overallearnings">0 gold</k><br>
<div id="army">
<j>Your army:<span id="yourbuild">Your buildings:</span></j><br>
<img src="buttons/knight.png" alt="knight" title="knight" style="width:30px;height:30px"><j><k id="armyk">0</k> knight(s).</j>
<span id="buildstats"><img src="buttons/tavern.png" alt="tavern" title="tavern" style="width:30px;height:30px"><j><k id="buildt">0</k> taverns(s).</j><br></span>
<img src="buttons/archer.png" alt="archer" title="archer" style="width:30px;height:30px"><j><k id="armyar">0</k> archer(s).</j>
<span id="buildstats"><img src="buttons/archery.png" alt="archery" title="archery" style="width:30px;height:30px"><j><k id="buildar">0</k> archerys(s).</j><br></span>
<img src="buttons/mage.png" alt="mage" title="mage" style="width:30px;height:30px"><j><k id="armym">0</k> mage(s).</j>
<span id="buildstats"><img src="buttons/mageguild.png" alt="mageguild" title="mageguild" style="width:30px;height:30px"><j><k id="buildmg">0</k> mage guilds(s).</j><br></span>
<img src="buttons/longbowman.png" alt="longbowman" title="longbowman" style="width:30px;height:30px"><j><k id="armylg">0</k> l.bowman(s).</j>
<span id="buildstats"><img src="buttons/barracks.png" alt="barracks" title="barracks" style="width:30px;height:30px"><j><k id="buildbr">0</k> barrack(s).</j><br></span>
<img src="buttons/paladin.png" alt="paladin" title="paladin" style="width:30px;height:30px"><j><k id="armyp">0</k> paladin(s).</j>
<span id="buildstats"><img src="buttons/garrison.png" alt="garrison" title="garrison" style="width:30px;height:30px"><j><k id="buildgr">0</k> garrison(s).</j><br></span>
<img src="buttons/halberdier.png" alt="halberdier" title="halberdier" style="width:30px;height:30px"><j><k id="armyhl">0</k> halberdier(s).</j><br>
<img src="buttons/horsemen.png" alt="horsemen" title="horsemen" style="width:30px;height:30px"><j><k id="armyhr">0</k> horsemen(s).</j><br>
<br>
</div>
<j>Total playing time:</j>
<k id="timeoverall">0</k><br>
</div>