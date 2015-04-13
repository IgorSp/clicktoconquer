<style>
#buildings {
position: relative;
}
</style>
<script>
$(function() {
	  $('#armybutton').click(function() {
		 $('#buttons').load("includes/buttons.php");
buildings=false;
  getId('build').style.visibility = 'visible';
	  });
	});
var btimer1 = setInterval(function(){if(buildings==true) BuildingsPage();else clearInterval(btimer1)},200);
		hideThis('archery');
	hideThis('mageguild');
	hideThis('barracks');
	hideThis('garrison');
	
	function BuildingsPage() {
		 a = 1.0*game.tavern;
		b = 1.8*game.archery;
		 c = 2.6*game.mageguild;
		 d = 3.8*game.barracks;
	e = 5.0*game.garrison;
	
				getId('tavern').setAttribute("title", a.toFixed(1));
			getId('archery').setAttribute('title', b.toFixed(1));  
				getId('mageguild').setAttribute('title', c.toFixed(1));  
					getId('barracks').setAttribute('title', d.toFixed(1));  
						getId('garrison').setAttribute('title', e.toFixed(1));  
		
				if(game.goldnow >= game.pb1)
			getId('tavern').style.background = ""; 
	else if(game.goldnow < game.pb1) {
getId('tavern').style.background = "grey"; 
	getId('tavern').style.backgroundImage = "url('buttons/tavern.png')"; 
	getId('tavern').style.backgroundRepeat="no-repeat";
	
	}
	
					if(game.goldnow >= game.pb2)
			getId('archery').style.background = ""; 
	else if(game.goldnow < game.pb2) {
getId('archery').style.background = "grey"; 
	getId('archery').style.backgroundImage = "url('buttons/archery.png')"; 
	getId('archery').style.backgroundRepeat="no-repeat";
	
	}
	
						if(game.goldnow >= game.pb3)
			getId('mageguild').style.background = ""; 
	else if(game.goldnow < game.pb3) {
getId('mageguild').style.background = "grey"; 
	getId('mageguild').style.backgroundImage = "url('buttons/mageguild.png')"; 
	getId('mageguild').style.backgroundRepeat="no-repeat";
	
	}
	
					if(game.goldnow >= game.pb4)
			getId('barracks').style.background = ""; 
	else if(game.goldnow < game.pb4) {
getId('barracks').style.background = "grey"; 
	getId('barracks').style.backgroundImage = "url('buttons/barracks.png')"; 
	getId('barracks').style.backgroundRepeat="no-repeat";
	
	}
	
					if(game.goldnow >= game.pb5)
			getId('garrison').style.background = ""; 
	else if(game.goldnow < game.pb5) {
getId('garrison').style.background = "grey"; 
	getId('garrison').style.backgroundImage = "url('buttons/garrison.png')"; 
	getId('garrison').style.backgroundRepeat="no-repeat";
	
	}
	
	
	
		 
	 	if(game.goldnow >= 100 && game.knight >= 4)
		 getId('archery').style.visibility='visible'; 
	 
	 	if(game.goldnow >= 400 && game.archery >= 4 && game.archer >= 6)
		 getId('mageguild').style.visibility='visible'; 
	 
	 	if(game.goldnow >= 1000 && game.tavern >= 7 && game.mageguild >= 4 && game.longbowman >= 3)
		 getId('barracks').style.visibility='visible'; 
	 
	 	if(game.goldnow >= 2000 && game.barracks >= 10 && game.paladin >= 6)
		 getId('garrison').style.visibility='visible'; 
	 
	 	if(game.tavern>0) {
			 getId('tavern').value="Tavern["+game.tavern+"][$"+Beautify(game.pb1)+"]"; 
	getId('tavern').style.visibility='visible'; }
		if(game.archery>0) {
			 getId('archery').value="Archery["+game.archery+"][$"+Beautify(game.pb2)+"]"; 
	getId('archery').style.visibility='visible'; }
		if(game.mageguild>0) {
			 getId('mageguild').value="Mage Guild["+game.mageguild+"][$"+Beautify(game.pb3)+"]"; 
	getId('mageguild').style.visibility='visible'; }
	
			if(game.barracks>0) {
			 getId('barracks').value="Barracks["+game.barracks+"][$"+Beautify(game.pb4)+"]"; 
	getId('barracks').style.visibility='visible'; }
	
			if(game.garrison>0) {
			 getId('garrison').value="Garrison["+game.garrison+"][$"+Beautify(game.pb5)+"]"; 
	getId('garrison').style.visibility='visible'; }
	}
		   
</script>
<div id="buildings">
<input type="button" id="tavern" name="tavern" onMouseover="ddrivetip('You have <b>'+game.tavern+'</b> tavern(s)<br>Each tavern is <b>1</b> gold/s<br><b>'+document.getElementById('tavern').getAttribute('title')+'</b> gold each second<br><b>0.2</b> gold per click<br><b>'+(game.tavern*0.2).toFixed(1)+'</b> extra click gold','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Tavern[$50]" onClick="build(event)">
<br>
<input type="button" id="archery" name="archery" onMouseover="ddrivetip('You have <b>'+game.archery+'</b> archeries<br>Each archery is <b>1.8</b> gold/s<br><b>'+document.getElementById('archery').getAttribute('title')+'</b> gold each second<br><b>0.5</b> gold per click<br><b>'+(game.archery*0.5).toFixed(1)+'</b> extra click gold','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Archery[$100]" onClick="build(event)">
<br>
<input type="button" id="mageguild" name="mageguild" onMouseover="ddrivetip('You have <b>'+game.mageguild+'</b> mage guild(s)<br>Each mage guild is <b>2.6</b> gold/s<br><b>'+document.getElementById('mageguild').getAttribute('title')+'</b> gold each second<br><b>0.8</b> gold per click<br><b>'+(game.mageguild*0.8).toFixed(1)+'</b> extra click gold','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Mage Guild[$300]" onClick="build(event)">
<br>
<input type="button" id="barracks" name="barracks" onMouseover="ddrivetip('You have <b>'+game.barracks+'</b> barrack(s)<br>Each barrack is <b>3.8</b> gold/s<br><b>'+document.getElementById('barracks').getAttribute('title')+'</b> gold each second<br><b>1.2</b> gold per click<br><b>'+(game.barracks*1.2).toFixed(1)+'</b> extra click gold','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Barracks[$600]" onClick="build(event)">
<br>
<input type="button" id="garrison" name="garrison" onMouseover="ddrivetip('You have <b>'+game.garrison+'</b> garrison(s)<br>Each garrison is <b>5.0</b> gold/s<br><b>'+document.getElementById('garrison').getAttribute('title')+'</b> gold each second<br><b>1.7</b> gold per click<br><b>'+(game.garrison*1.7).toFixed(1)+'</b> extra click gold','grey', 150)" onMouseout="hideddrivetip()" class="myButton" input title="0" value="Garrison[$1000]" onClick="build(event)">
<br>
<input type="button" id="armybutton" name="armybutton" class="armybutton" value="Army" onClick="checkBtn(event)">
<br>
</div>