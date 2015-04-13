
<style>
#buttons {
	position: absolute;
top: 13%;
left:72%;
}

@media all and (max-width: 1200px) and (min-width: 480px) {
#buttons {
	position: absolute;
top: 13%;
left:76.2%;
}
}
</style>

<script>
setTimeout(ButtonsPage);

function ButtonsPage() {
	hideThis('knight');
	hideThis('archer');
	hideThis('mage');
	hideThis('longbowman');
		hideThis('paladin');
			hideThis('halberdier');
		hideThis('horsemen');
	
	if(game.knight>0) {
			 getId('knight').value="Knight["+game.knight+"][$"+Beautify(game.p1)+"]["+Beautify(game.knextexp)+"xp]"; 
	getId('knight').style.visibility='visible'; }
		if(game.archer>0) {
			 getId('archer').value="Archer["+game.archer+"][$"+Beautify(game.p5)+"]["+Beautify(game.arnextexp)+"xp]"; 
	getId('archer').style.visibility='visible'; }
		if(game.mage>0) {
			 getId('mage').value="Mage["+game.mage+"][$"+Beautify(game.p3)+"]["+Beautify(game.mnextexp)+"xp]"; 
	getId('mage').style.visibility='visible'; }
			if(game.longbowman>0) {
			 getId('longbowman').value="L.bowman["+game.longbowman+"][$"+Beautify(game.p4)+"]["+Beautify(game.lgnextexp)+"xp]"; 
	getId('longbowman').style.visibility='visible'; }
			if(game.paladin>0) {
			 getId('paladin').value="Paladin["+game.paladin+"][$"+Beautify(game.p2)+"]["+Beautify(game.pnextexp)+"xp]"; 
	getId('paladin').style.visibility='visible'; }
	
				if(game.halberdier>0) {
			 getId('halberdier').value="Halberdier["+game.halberdier+"][$"+Beautify(game.p6)+"]["+Beautify(game.hlnextexp)+"xp]"; 
	getId('halberdier').style.visibility='visible'; }
				if(game.horsemen>0) {
			 getId('horsemen').value="Horsemen["+game.horsemen+"][$"+Beautify(game.p7)+"]["+Beautify(game.hrnextexp)+"xp]"; 
	getId('horsemen').style.visibility='visible'; }
}


</script>

<div id="buttons">
<input type="button" id="knight" name="knight" onMouseover="ddrivetip('You have <b>'+game.knight+'</b> knight(s)<br>Single knight is <b>-1</b> gold/10s<br><b>-'+document.getElementById('knight').getAttribute('title')+'</b> gold every 10 seconds<br><b>'+(game.kall).toFixed(1)+'</b> overall gold payment<br><b>0.1</b> extra gold per click<br><b>'+(game.knight*0.1).toFixed(1)+'</b> overall extra click gold<br><b>'+Beautify(1*game.knight)+'</b> exp every 10 seconds<br><b>'+Beautify(game.knightxp)+'</b> overall exp','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Knight[$100][1xp]" onClick="checkBtn(event)">
<br>
<input type="button" id="archer" name="archer" onMouseover="ddrivetip('You have <b>'+game.archer+'</b> archer(s)<br>Single archer is <b>-5</b> gold/10s<br><b>-'+document.getElementById('archer').getAttribute('title')+'</b> gold every 10 seconds<br><b>'+(game.arall).toFixed(1)+'</b> overall gold payment<br><b>0.3</b> extra gold per click<br><b>'+(game.archer*0.3).toFixed(1)+'</b> overall extra click gold<br><b>'+Beautify(1*game.archer)+'</b> exp every 10 seconds<br><b>'+Beautify(game.arxp)+'</b> overall exp','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Archer[$500][2xp]" onClick="checkBtn(event)">
<br>
<input type="button" id="mage" name="mage" onMouseover="ddrivetip('You have <b>'+game.mage+'</b> mage(s)<br>Single mage is <b>-8</b> gold/10s<br><b>-'+document.getElementById('mage').getAttribute('title')+'</b> gold every 10 seconds<br><b>'+(game.mall).toFixed(1)+'</b> overall gold payment<br><b>0.5</b> extra gold per click<br><b>'+(game.mage*0.5).toFixed(1)+'</b> overall extra click gold<br><b>'+Beautify(1*game.mage)+'</b> exp every 10 seconds<br><b>'+Beautify(game.magxp)+'</b> overall exp','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Mage[$1000][5xp]" onClick="checkBtn(event)">
<br>

<input type="button" id="longbowman" name="longbowman" onMouseover="ddrivetip('You have <b>'+game.longbowman+'</b> longbowman(s)<br>Single lbm is <b>-10</b> gold/10s<br><b>-'+document.getElementById('longbowman').getAttribute('title')+'</b> gold every 10 seconds<br><b>'+(game.lgall).toFixed(1)+'</b> overall gold payment<br><b>0.8</b> extra gold per click<br><b>'+(game.longbowman*0.8).toFixed(1)+'</b> extra click gold<br><b>'+Beautify(1*game.longbowman)+'</b> exp every 10 seconds<br><b>'+Beautify(game.lgxp)+'</b> overall exp','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="L.bowman[$1500][10xp]" onClick="checkBtn(event)">
<br>

<input type="button" id="paladin" name="paladin" onMouseover="ddrivetip('You have <b>'+game.paladin+'</b> paladin(s)<br>Single pal is <b>-12</b> gold/10s<br><b>-'+document.getElementById('paladin').getAttribute('title')+'</b> gold every 10 seconds<br><b>'+(game.pall).toFixed(1)+'</b> overall gold payment<br><b>1.4</b> extra gold per click<br><b>'+(game.paladin*1.4).toFixed(1)+'</b> overall extra click gold<br><b>'+Beautify(1*game.paladin)+'</b> exp every 10 seconds<br><b>'+Beautify(game.palxp)+'</b> overall exp','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Paladin[$1800][15xp]" onClick="checkBtn(event)">
<br>

<input type="button" id="halberdier" name="halberdier" onMouseover="ddrivetip('You have <b>'+game.halberdier+'</b> halberdier(s)<br>Single hlb is <b>-15</b> gold/10s<br><b>-'+document.getElementById('halberdier').getAttribute('title')+'</b> gold every 10 seconds<br><b>'+(game.hlall).toFixed(1)+'</b> overall gold payment<br><b>1.8</b> extra gold per click<br><b>'+(game.halberdier*1.8).toFixed(1)+'</b> overall extra click gold<br><b>'+Beautify(1*game.halberdier)+'</b> exp every 10 seconds<br><b>'+Beautify(game.hlxp)+'</b> overall exp','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Halberdier[$2000][20xp]" onClick="checkBtn(event)">
<br>

<input type="button" id="horsemen" name="horsemen" onMouseover="ddrivetip('You have <b>'+game.horsemen+'</b> horsemen(s)<br>Single hrm is <b>-25</b> gold/10s<br><b>-'+document.getElementById('horsemen').getAttribute('title')+'</b> gold every 10 seconds<br><b>'+(game.hrall).toFixed(1)+'</b> overall gold payment<br><b>2.8</b> extra gold per click<br><b>'+(game.horsemen*2.8).toFixed(1)+'</b> overall extra click gold<br><b>'+Beautify(2*game.horsemen)+'</b> exp every 10 seconds<br><b>'+Beautify(game.hrxp)+'</b> overall exp','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Horsemen[$2600][30xp]" onClick="checkBtn(event)">
<br>




</div>
