		var timer = setInterval(function(){addCount()},200);
		var timer2 = setInterval(function(){if(game.knight>0) ryc()},10000);
		
		var timer3 = setInterval(function(){prize()},Math.floor((Math.random()*3e+6)+900000));
		var timer4 = setInterval(function () {if((game.goldnow>=500 || game.knight >= 5) && game.autosave==1) save_game()}, 500000);  
		
	    var timer5 = setInterval(function(){if(ticker==null) showLetter()},Math.floor((Math.random()*5.4e+6)+1.2e+6));
		var timer6 = setInterval(function(){buildCount()},1000);
		var timer7 = setInterval(function(){acceptRandom()},Math.floor((Math.random()*3.6e+6)+1.2e+6));
	
			
	function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 3000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}
function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}
onReady(function () {
    show('page', true);
    show('loading', false);
});

		
	$(function() {
  var ele = $('#add');
  var clr = null;
  var rand = game.goldnow;
  (loop = function() {
    clearTimeout(clr);
    (inloop = function() {
		     if(game.goldnow > rand && game.goldnow-rand < 100) {
			 ele.html(Beautify(rand+=1)); }
	  		else if(game.goldnow > rand && game.goldnow-rand > 1000) {
			 ele.html(Beautify(rand+=1000)); }
			  else if(game.goldnow > rand && game.goldnow-rand > 100) {
			 ele.html(Beautify(rand+=100)); }
			 else {
				 rand = game.goldnow;
				 getId('add').innerHTML=Beautify(game.goldnow);
        return;
      }
      clr = setTimeout(inloop, 30);
    })(); 
    setTimeout(loop, 500);
  })();
});
		
				  function buildCount() {
		  var b = 1.0*game.tavern;
		  var c = game.goldnow+=b;
		  game.tvall+=b;
		  game.overall+=b;
		  game.overallearn+=b;
				   if(game.archery >= 1) {
		   var b = 1.8*game.archery;
		  var c = game.goldnow+=b;
		  game.overall+=b;
		   game.overallearn+=b;
				  } 
				  
				  
				  	if(game.mageguild >= 1) {
		   var b = 2.6*game.mageguild;
		  var c = game.goldnow+=b;
		  game.overall+=b;
		   game.overallearn+=b;
				  } 
				  
				  if(game.barracks >= 1) {
		   var b = 3.8*game.barracks;
		  var c = game.goldnow+=b;
		  game.overall+=b;
		   game.overallearn+=b;
				  } 
				  
		 if(game.garrison >= 1) {
		   var b = 5.0*game.garrison;
		  var c = game.goldnow+=b;
		  game.overall+=b;
		   game.overallearn+=b;
				  } 
				  
				  }
		
				function promo()
		{
		clearInterval(ticker2);
			hideThis('promoimg');
		  getId('promoimg').disabled = true;
		    getId('promobar').style.visibility = 'visible';
		  startTimer(100);
		
}
var timeInSecs2;
var ticker2;
function startTimer2(secs){
timeInSecs2 = parseInt(secs)-1;
ticker2 = setInterval("tick2()",1000);  
}
function tick2() {
var secs = timeInSecs2;
if (secs>0) {
timeInSecs2--;
}
else {
clearInterval(ticker2); 
  document.getElementById('promoimg').disabled = true;
  hideThis('promoimg');
  ticker2=null;
}
}
var timeInSecs;
var ticker;
function startTimer(secs){
timeInSecs = parseInt(secs)-1;
ticker = setInterval("tick()",1000);  
game.clickcount+=5;
alertify.log("You have just activated the promotion time! During this 100 seconds You will get extra gold each second and extra +5 gold per click.", "", 10000);
getId('turnoffpromo').style.visibility='visible'; 	
	if (ie4up||ns6up){
    snowIE_NS6();
		if (hidesnowtime>0){
		setTimeout("hidesnow()", hidesnowtime*1000)
} 
for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="visible";}
}
function tick() {
var secs = timeInSecs;
if (secs>0) {
timeInSecs--;
}
else {
clearInterval(ticker); 
  getId('promobar').style.visibility = 'hidden';
ticker=null;
hidesnow();
game.clickcount-=5;
hideThis('turnoffpromo');
}
	$('#promobar').progressbar( "value" ) || 100;
	$('#promobar').progressbar( "value", secs - 1 );
	getId('promobar').setAttribute('title', secs+" seconds left");
	var rand = Math.floor((Math.random()*100)+1);
game.goldnow+=rand;
game.overall+=rand;
}
function generateRandom() {
    var num = Math.floor(Math.random() * 400);
    return num;
}
function showLetter() {
  document.getElementById('promoimg').disabled = false;
  getId('promoimg').style.visibility = 'visible';
    var left = generateRandom();
    var top = generateRandom();
    $('#promoimg').last().css({"position":"absolute","top": top + "px", "left": left + "px"});
	
	startTimer2(5);
}
	
			 $(function() {
	$( "#promobar" ).progressbar({
	value: 100,
	create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color':'red'})}     //moge usunac, nie przydatne (spawdzic najpierw css jak to zgrac)
	});
	});
	function pro2() {
	$('#promobar').progressbar({ "value": 63 });
	}
	
	function turnoffgold() {
		hidesnow();
		hideThis('turnoffpromo');
	}
	
////Jquery alert			
		
		$.extend({ alert: function (message, title) {
  $("<div></div>").dialog( {
    buttons: { "Ok": function () { $(this).dialog("close"); } },
    close: function (event, ui) { $(this).remove(); },
    resizable: false,
    title: title,
    modal: true
  }).text(message);
}
});
		
////Jquery alert
		
		
function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}
preload([
   'img/gold.png',
    'img/treasure.png',
    'img/castle1.jpg',
    'img/castle2.jpg',
    'img/castle3.jpg'
]);
		
		
		  function hideThis(id) {
		  getId(id).style.visibility = 'hidden';
		  }
		  
		  function getId(id) {
		  return document.getElementById(id);
		  }
		  
		  
		   window.onbeforeunload = function(e) {
			   if(game.closewar==1)
    return true;
else return;
}; 
var closetimer = 0;
function close_warning() {
		if(closetimer==0) {
	if(game.closewar==0) {   //auto save off
		game.closewar=1; //on
		getId('closewarning').value="Close Warning [ON]"; 
		alertify.success("Warning before closing browser Tab [ON]");
		closetimer=1;
		setTimeout(function(){
closetimer=0;
}, 10000);
	}
		else  { 
		game.closewar=0;  //off
		getId('closewarning').value="Close Warning [OFF]"; 
		alertify.error("Warning before closing browser Tab [OFF]");
closetimer=1;
setTimeout(function(){
closetimer=0;
}, 10000);
		}
	}  else alertify.alert("You need to wait at least 10 seconds before switching the button.");
}
var loadtimer = 0;
function auto_load() {
		if(loadtimer==0) {
			if(localStorage.getItem("autoload")=="yes" || localStorage.getItem("autoload")==null){   //auto load on
				localStorage.setItem("autoload","no"); //off
		getId('autoload').value="Auto Load [OFF]"; 
		alertify.error("Game Auto Loading turned [OFF]");
		loadtimer=1;
		setTimeout(function(){
loadtimer=0;
}, 10000);
	}
		else  { 
			   localStorage.setItem("autoload","yes");  //off
		getId('autoload').value="Auto Load [ON]"; 
		alertify.success("Game Auto Loading turned [ON]");
loadtimer=1;
setTimeout(function(){
loadtimer=0;
}, 10000);
		}
	}  else alertify.alert("You need to wait at least 10 seconds before switching the button.");
}
	
	
	function load_custom_game() {
alertify.prompt("Paste your save code below", function (e, str) {
    if (e) {
	var save_data = str;
	save_data = JSON.parse(atob(save_data));
		if (!save_data || !verify_save(save_data)){
			alertify.alert('could not load the save..');
			load_custom_game();
			return;
		}
		game = save_data;
		update_view(); 
    } else {
    }
}, "save key");
	}
		var savetimer = 0;
		function code_save() {
			if (Storage !== void(0)) {
			if(savetimer==0) {
		if(game.goldnow>=200 || game.knight >= 3) {
		localStorage['clickclick_save'] = btoa(JSON.stringify(game));
		savetimer=1;
		alertify.set({ delay: 1000 });
		alertify.error("Game saved");
		$.alert("Here is the save data please save this: "+btoa(JSON.stringify(game)), "Save"); 
		setTimeout(function(){
savetimer=0;
}, 30000); 
} else alertify.alert('Cannot save under 200');
} else alertify.alert('You need to wait at least 30 seconds before next save.');
} else alertify.alert('Some error occurred. Please turn ON LocalStorage on Your browser.');
		}
		function verify_save(obj) {
			if (typeof obj != 'object') return false;
			return true;
		}
		function save_game() {
				if (Storage !== void(0)) {
			if(savetimer==0) {
		if(game.goldnow>=200 || game.knight >= 3) {
			savetimer=1;
		  alertify.set({ delay: 1000 });
		   alertify.error("Game saved");
		   localStorage['clickclick_save'] = btoa(JSON.stringify(game));
setTimeout(function(){
savetimer=0;
}, 30000);
		   } else alertify.alert('Cannot save under 200');
			}  else alertify.alert('You need to wait at least 30 seconds before next save.');
} else alertify.alert('Some error occurred. Please turn ON LocalStorage on Your browser.');
		}
		var game = {
			clickcount: 1,  //gold per click
			goldnow: 0,   //actual gold ammount
		    overallpay: 0,   //army payment
			overallearn: 0,   //buildings earned gold
			overall: 0,   //overall earned money
			knight: 0,   //knight lvl
			p1: 100,  //knight price
			kall: 0,    //overall knight gold
			knextexp: 1,   //knight's exp for next lvl
			knightxp: 0,  //overall exp knight produced
			lvl:0,   //actual account lvl
			exp:0,   //exp u have "now"
			pro:0,   //progress bar
	totalxp: 100,   //formula, exp to next lvl
	lvlxp: 0,   //saving overall exp
	//
	paladin: 0,
	p2: 1800,
	pnextexp: 15,
	palxp: 0,
	pall: 0,
	//
	mage: 0,
	p3: 1000,
	mnextexp: 5,
	magxp: 0,
	mall: 0,
	//
	longbowman: 0,
	p4: 1500,
	lgnextexp: 10,
	lgxp: 0,
	lgall: 0,
	//
	archer: 0,
	p5: 500,
	arnextexp: 2,
	arxp: 0,
	arall: 0,
	//
	halberdier: 0,
	p6: 2000,
	hlnextexp: 20,
	hlxp: 0,
	hlall: 0,
	//
	horsemen: 0,
	p7: 2600,
	hrnextexp: 30,
	hrxp: 0,
	hrall: 0,
	//
	
	//Buildings
	tavern: 0,
	pb1: 50,
	tvall: 0,
	//
	archery: 0,
	pb2: 100,
	archall: 0,
	//
	mageguild: 0,
	pb3: 300,
	maggall: 0,
	//
	barracks: 0,
	pb4: 600,
	barrall: 0,
	//
	garrison: 0,
	pb5: 1000,
	garrall: 0,
	//
	
	//
	attribute: 0,
	intelligence: 0,
	strength: 0,
	defense: 0,
	agility: 0,
	//
	//achievments
	ach1: 0,
	ach2: 0,
	ach3: 0,
	ach4: 0,
	//
	
	m1not: 0,
	m1dur: 0,
	m1did: 0,
	s1: 300,
	
		m2not: 0,
	m2dur: 0,
	m2did: 0,
	s2: 900,
	
	doingmiss: 0,
	
	closewar: 0,
	autosave: 1,
	name: 0,
	pass: 0,
	alltime: 0,
theme: 0,
pwdtimer: 1,
secs: 0
		};
		function update_view() {
					 	 $('#leftside').load("includes/left.php");
					   stats=false;
					   missions=false;
					    achievments=false;
						 buildings=false;
						 buttons=true;
					   				alertify.set({ delay: 1000 });
						alertify.success("Game loaded");
			
									
							hidesnow();
							
			if(ticker3!=null) {				
	clearInterval(ticker3); 
			ticker3=null; }
			if(ticker4!=null) {
	clearInterval(ticker4); 
  ticker4=null;
			}
			
			startTimer3(game.secs);
			startTimer4(game.alltime);
			
			
						if(game.theme==0) {
			document.body.style.backgroundImage="url('img/castle1.jpg')"; }
			else if(game.theme==1) {
			document.body.style.backgroundImage="url('img/castle2.jpg')"; }
		else if(game.theme==2) {
		document.body.style.backgroundImage="url('img/castle3.jpg')"; }
			
				$('#promobar').progressbar( "value" ) || 100;
		        getId('missions').style.visibility = 'visible';
		  	    getId('stats').style.visibility = 'visible';
			  	getId('box').style.visibility = 'visible';
				hideThis('promoimg');
		    getId('promoimg').disabled = true;
		    getId('promobar').style.visibility = 'hidden';
			
			hideThis('back');
            hideThis('back2');
            hideThis('back3');
			 clearInterval(ticker);
			 clearInterval(ticker2);
			
			  ticker=null;
			  ticker2=null;
		
		 clearInterval(mtime1);
		 clearInterval(mtime2); 
			
			var e2 = getId('add');
			e2.innerHTML = Beautify(game.goldnow);
			
			var e2 = getId('knight');
			if(game.knight>0) {
			e2.value="Knight["+game.knight+"][$"+Beautify(game.p1)+"]["+Beautify(game.knextexp)+"xp]"; 
			getId('knight').style.visibility='visible'; 
			}
			else {
			e2.value="Knight[$"+Beautify(game.p1)+"]"; }
			
			
				var e2 = getId('archer');
			if(game.archer>0) {
			e2.value="Archer["+game.archer+"][$"+Beautify(game.p5)+"]["+Beautify(game.arnextexp)+"xp]"; 
			getId('archer').style.visibility='visible'; 
			}
			else {
			e2.value="Archer[$"+Beautify(game.p5)+"]"; }
			
				var e2 = getId('mage');
			if(game.mage>0) {
			e2.value="Mage["+game.mage+"][$"+Beautify(game.p3)+"]["+Beautify(game.mnextexp)+"xp]"; 
			getId('mage').style.visibility='visible'; 
			}
			else {
			e2.value="Mage[$"+Beautify(game.p3)+"]"; }
			
				var e2 = getId('longbowman');
			if(game.longbowman>0) {
			e2.value="L.bowman["+game.longbowman+"][$"+Beautify(game.p4)+"]["+Beautify(game.lgnextexp)+"xp]"; 
			getId('longbowman').style.visibility='visible'; 
			}
			else {
			e2.value="L.bowman[$"+Beautify(game.p4)+"]"; }
			
				var e2 = getId('paladin');
			if(game.paladin>0) {
			e2.value="Paladin["+game.paladin+"][$"+Beautify(game.p2)+"]["+Beautify(game.pnextexp)+"xp]"; 
			getId('paladin').style.visibility='visible'; 
			}
			else {
			e2.value="Paladin[$"+Beautify(game.p2)+"]"; }
			
				var e2 = getId('halberdier');
			if(game.halberdier>0) {
			e2.value="Halberdier["+game.halberdier+"][$"+Beautify(game.p6)+"]["+Beautify(game.hlnextexp)+"xp]"; 
			getId('halberdier').style.visibility='visible'; 
			}
			else {
			e2.value="Halberdier[$"+Beautify(game.p6)+"]"; }
			
				var e2 = getId('horsemen');
			if(game.horsemen>0) {
			e2.value="Horsemen["+game.horsemen+"][$"+Beautify(game.p7)+"]["+Beautify(game.hrnextexp)+"xp]"; 
			getId('horsemen').style.visibility='visible'; 
			}
			else {
			e2.value="Horsemen[$"+Beautify(game.p7)+"]"; }	
			
			var e2 = getId('lvl');
			e2.innerHTML = "Lvl "+game.lvl;
			var e2 = getId('lvlxp');
			e2.innerHTML = Beautify(game.lvlxp);
			var e2 = getId('nextlvl');
			e2.innerHTML = Beautify(game.exp)+' / '+Beautify(game.totalxp); 
			var e2 = getId('progressbar');
			$('#progressbar').progressbar({ "value": game.pro});
		
						 getId('name').style.visibility = 'visible';
						 if(game.name!=0) {
						 getId('name').innerHTML=game.name+"'s Castle"; }
						 else {
							  getId('name').innerHTML="Castle Name"; }
		
							 
			if(game.m1dur==1) {
			miss1(); }
		if(game.m2dur==1) {
		miss2(); }
		}
		function load_game() {
alertify.confirm("Are You sure You want to load previous game?", function (e) {
    if (e) {
  	if (!localStorage['clickclick_save']) return alertify.alert("There is no save to load");
			var save_data = JSON.parse(atob(localStorage['clickclick_save']));
			game = save_data;
			update_view();
    } else {
    }
});
		}
		function Beautify(what)
		{
			var str='';
			what=Math.floor(what);
			what=(what+'').split('').reverse();
			for (var i in what)
			{
				if (i%3==0 && i>0) str=','+str;
				str=what[i]+str;
			}
			return str;
		}
		
			$(function() {
	   $( progressbar ).tooltip({	
	      autoOpen: true,	
		  track:true,
        open: function (event, ui) {
            setTimeout(function () {
                $(ui.tooltip).fadeOut('fast');
            }, 2000);
        }
	   });
	});
			
			 function build(event) {
					   
						if (event.target.name=="tavern") {
							if(game.goldnow >= game.pb1)
		  {
			var a = game.goldnow-game.pb1;
		
			game.goldnow-=game.pb1;
			getId('add').innerHTML=Beautify(a);
			game.pb1*=1.2;
			game.tavern+=1;
game.clickcount+=0.2;
				getId('tavern').value="Tavern["+game.tavern+"][$"+Beautify(game.pb1)+"]"; 
					
					}
				 }
						 
					else if (event.target.name=="archery") {
							if(game.goldnow >= game.pb2)
		  {
			var a = game.goldnow-game.pb2;
		
			game.goldnow-=game.pb2;
			getId('add').innerHTML=Beautify(a);
			game.pb2*=1.23;
			game.archery+=1;
game.clickcount+=0.5;
				getId('archery').value="Archery["+game.archery+"][$"+Beautify(game.pb2)+"]"; 
					
					}
				 }
				 
						   else if (event.target.name=="mageguild") {
							if(game.goldnow >= game.pb3)
		  {
			var a = game.goldnow-game.pb3;
		
			game.goldnow-=game.pb3;
			getId('add').innerHTML=Beautify(a);
			game.pb3*=1.26;
			game.mageguild+=1;
game.clickcount+=0.8;
				getId('mageguild').value="Mage Guild["+game.mageguild+"][$"+Beautify(game.pb3)+"]"; 
					
					}
				 }
				 
				 			else if (event.target.name=="barracks") {
							if(game.goldnow >= game.pb4)
		  {
			var a = game.goldnow-game.pb4;
		
			game.goldnow-=game.pb4;
			getId('add').innerHTML=Beautify(a);
			game.pb4*=1.27;
			game.barracks+=1;
game.clickcount+=1.2;
				getId('barracks').value="Barracks["+game.barracks+"][$"+Beautify(game.pb4)+"]"; 
					
					}
				 }
				 
				 			else if (event.target.name=="garrison") {
							if(game.goldnow >= game.pb5)
		  {
			var a = game.goldnow-game.pb5;
		
			game.goldnow-=game.pb5;
			getId('add').innerHTML=Beautify(a);
			game.pb5*=1.27;
			game.garrison+=1;
game.clickcount+=1.7;
				getId('garrison').value="Garrison["+game.garrison+"][$"+Beautify(game.pb5)+"]"; 
					
					}
				 }
					 
		}
		
		
		
		var basexp=3;
		 function checkBtn(event) {
					   
						if (event.target.name=="knight") {
							if(game.goldnow >= game.p1)
		  {
			var a = game.goldnow-game.p1;
		
			game.goldnow-=game.p1;
			getId('add').innerHTML=Beautify(a);
			game.p1*=1.15;
			game.knight+=1;
game.clickcount+=0.1;
				game.knightxp+=game.knextexp;
			game.exp+=game.knextexp;
			game.lvlxp+=game.knextexp;
					game.pro+=(game.knextexp/game.totalxp*100); 
	game.knextexp=(basexp*(game.knight))+(increment*(.001*(game.knight)*(game.knight-2)));
				getId('knight').value="Knight["+game.knight+"][$"+Beautify(game.p1)+"]["+Beautify(game.knextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
					
					}
				 }
			
				 
					else if (event.target.name=="archer") {
							if(game.goldnow >= game.p5)
		  {
			var a = game.goldnow-game.p5;
		
			game.goldnow-=game.p5;
			getId('add').innerHTML=Beautify(a);
			game.p5*=1.15;
			game.archer+=1;
game.clickcount+=0.3;
				game.arxp+=game.arnextexp;
			game.exp+=game.arnextexp;
			game.lvlxp+=game.arnextexp;
					game.pro+=(game.arnextexp/game.totalxp*100); 	
	game.arnextexp=(basexp*(game.archer*1.2))+(increment*(.002*(game.archer)*(game.archer-2)));
				getId('archer').value="Archer["+game.archer+"][$"+Beautify(game.p5)+"]["+Beautify(game.arnextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
					
					}
				 }
				 
						   else if (event.target.name=="mage") {
							if(game.goldnow >= game.p3) {
								if(game.intelligence>=1) {
			var a = game.goldnow-game.p3;
		
			game.goldnow-=game.p3;
			getId('add').innerHTML=Beautify(a);
			game.p3*=1.15;
			game.mage+=1;
game.clickcount+=0.5;
				game.magxp+=game.mnextexp;
			game.exp+=game.mnextexp;
			game.lvlxp+=game.mnextexp;
					game.pro+=(game.mnextexp/game.totalxp*100); 	
	game.mnextexp=(3*basexp*(game.mage))+(increment*(.003*(game.mage)*(game.mage-3)));
				getId('mage').value="Mage["+game.mage+"][$"+Beautify(game.p3)+"]["+Beautify(game.mnextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
								} else alertify.alert("You need to have at least 1 intelligence point to buy Mage"); 
					}
				 }
				 
				  else if (event.target.name=="longbowman") {
							if(game.goldnow >= game.p4) {
								if(game.agility>=1) {
			var a = game.goldnow-game.p4;
		
			game.goldnow-=game.p4;
			getId('add').innerHTML=Beautify(a);
			game.p4*=1.15;
			game.longbowman+=1;
game.clickcount+=0.8;
				game.lgxp+=game.lgnextexp;
			game.exp+=game.lgnextexp;
			game.lvlxp+=game.lgnextexp;
					game.pro+=(game.lgnextexp/game.totalxp*100); 	
	game.lgnextexp=(5*basexp*(game.longbowman))+(increment*(.005*(game.longbowman)*(game.longbowman-3)));
				getId('longbowman').value="L.bowman["+game.longbowman+"][$"+Beautify(game.p4)+"]["+Beautify(game.lgnextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
								} else alertify.alert("You need to have at least 1 agility point to buy Longbowman"); 
					}
				 }
				 
				 				else if (event.target.name=="paladin") {
							if(game.goldnow >= game.p2)
		  {
			var a = game.goldnow-game.p2;
		
			game.goldnow-=game.p2;
			getId('add').innerHTML=Beautify(a);
			game.p2*=1.15;
			game.paladin+=1;
game.clickcount+=1.4;
				game.palxp+=game.pnextexp;
			game.exp+=game.pnextexp;
			game.lvlxp+=game.pnextexp;
					game.pro+=(game.pnextexp/game.totalxp*100); 	
	game.pnextexp=(7*basexp*(game.paladin))+(increment*(.006*(game.paladin)*(game.paladin-3)));
				getId('paladin').value="Paladin["+game.paladin+"][$"+Beautify(game.p2)+"]["+Beautify(game.pnextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
					
					}
				 }
				 
				 		 				else if (event.target.name=="halberdier") {
							if(game.goldnow >= game.p6) {
							if(game.m1did==1) {	
			var a = game.goldnow-game.p6;
		
			game.goldnow-=game.p6;
			getId('add').innerHTML=Beautify(a);
			game.p6*=1.15;
			game.halberdier+=1;
game.clickcount+=1.8;
				game.hlxp+=game.hlnextexp;
			game.exp+=game.hlnextexp;
			game.lvlxp+=game.hlnextexp;
					game.pro+=(game.hlnextexp/game.totalxp*100); 	
	game.hlnextexp=(8*basexp*(game.halberdier))+(increment*(.007*(game.halberdier)*(game.halberdier-3)));
				getId('halberdier').value="Halberdier["+game.halberdier+"][$"+Beautify(game.p6)+"]["+Beautify(game.hlnextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
					
					} else alertify.alert("You need to have done first mission to buy Halberdier");
				 }
										}
				 
				 		 				else if (event.target.name=="horsemen") {
							if(game.goldnow >= game.p7) {
								if(game.m1did==1 && game.m2did==1) {	
			var a = game.goldnow-game.p7;
		
			game.goldnow-=game.p7;
			getId('add').innerHTML=Beautify(a);
			game.p7*=1.15;
			game.horsemen+=1;
game.clickcount+=2.8;
				game.hrxp+=game.hrnextexp;
			game.exp+=game.hrnextexp;
			game.lvlxp+=game.hrnextexp;
					game.pro+=(game.hrnextexp/game.totalxp*100); 	
	game.hrnextexp=(13*basexp*(game.horsemen))+(increment*(.009*(game.horsemen)*(game.horsemen-4)));
				getId('horsemen').value="Horsemen["+game.horsemen+"][$"+Beautify(game.p7)+"]["+Beautify(game.hrnextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
									} else alertify.alert("You need to have done second mission to buy Horsemen");
					}
				 }
					 
		}
		function prize()
		{
			var xyz = Math.floor((Math.random()*100)+1);
		var a = Math.floor((Math.random()*500)+10);
if(xyz>=30) {			
		game.goldnow+=a;
		game.overall+=a;
		alertify.log("<font color=red><b><center>You just <u>won</u> " +a+ "$ thanks to the successful conquest</center></b></font>", "", 10000);
		}
		else {
			if(game.goldnow<=0)
				return false;
			else if(game.goldnow>a) {
		game.goldnow-=a;
		alertify.log("<font color=red><b><center>Bad luck to Your castle, You just <u>lost</u> " +a+ "$</center></b></font>", "", 10000);	
		} else {
		var b = game.goldnow;
			game.goldnow-=b;
			alertify.log("<font color=red><b><center>Bad luck to Your castle, You just <u>lost</u> " +b+ "$</center></b></font>", "", 10000);	
		}
		}
		}
			
			
				function acceptRandom()
		{
			var xyz = Math.floor((Math.random()*100)+1);
		
		if(xyz>=30) {	
alertify.set({ labels: {
    ok     : "Accept",
    cancel : "Deny"
} });
alertify.set({ buttonFocus: "ok" }); 
alertify.confirm("A lone Knight would like to join Your army, do You accept?", function (e) {
    if (e) {
   
if(game.knight<1) {
			 getId('knight').style.visibility='visible'; 
}
			game.p1*=1.15;
			game.knight+=1;
game.clickcount+=0.1;
				game.knightxp+=game.knextexp;
			game.exp+=game.knextexp;
			game.lvlxp+=game.knextexp;
					game.pro+=(game.knextexp/game.totalxp*100); 	
	game.knextexp=(basexp*(game.knight))+(increment*(.001*(game.knight)*(game.knight-2)));
				getId('knight').value="Knight["+game.knight+"][$"+Beautify(game.p1)+"]["+Beautify(game.knextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		alertify.log("New Knight have joined Your army!", "", 5000);
		    } else {
       alertify.log("You have rejected this Knight.", "", 5000);
    }
});
		} else {		
			alertify.set({ labels: {
    ok     : "Accept",
    cancel : "Deny"
} });
alertify.set({ buttonFocus: "ok" }); // "none", "ok", "cancel"
alertify.confirm("A lone Archer would like to join Your army, do You accept?", function (e) {
    if (e) {
			if(game.archer<1) {
			 getId('archer').style.visibility='visible'; 
}
			game.p5*=1.15;
			game.archer+=1;
game.clickcount+=0.3;
				game.arxp+=game.arnextexp;
			game.exp+=game.arnextexp;
			game.lvlxp+=game.arnextexp;
					game.pro+=(game.arnextexp/game.totalxp*100); 	
	game.arnextexp=(basexp*(game.archer*1.2))+(increment*(.002*(game.archer)*(game.archer-2)));
				getId('archer').value="Archer["+game.archer+"][$"+Beautify(game.p5)+"]["+Beautify(game.arnextexp)+"xp]"; 
	$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
					alertify.log("New Archer have joined Your army!", "", 5000);
					    } else {
       alertify.log("You have rejected this Archer.", "", 5000);
    }
});		
					
		}
		}
			
			var warning1 = 0;
	var warning2 = 0;
	
	var txt1,txt2,txt3,txt4,txt5, txt6, txt7;
			var str='';
		function addCount()
		{
			document.title = "$"+(game.goldnow).toFixed(1)+" ClickToConquer";
			
			if(buttons==true) {
			
			if(game.goldnow >= game.p1)
			getId('knight').style.background = ""; 
	else if(game.goldnow < game.p1) {
getId('knight').style.background = "grey"; 
	getId('knight').style.backgroundImage = "url('buttons/knight.png')"; 
	getId('knight').style.backgroundRepeat="no-repeat";
	}
if(game.goldnow >= game.p5)
			getId('archer').style.background = ""; 
	else if(game.goldnow < game.p5) {
getId('archer').style.background = "grey"; 
	getId('archer').style.backgroundImage = "url('buttons/archer.png')"; 
	getId('archer').style.backgroundRepeat="no-repeat";
	}
if(game.goldnow >= game.p3)
			getId('mage').style.background = ""; 
	else if(game.goldnow < game.p3) {
getId('mage').style.background = "grey"; 
	getId('mage').style.backgroundImage = "url('buttons/mage.png')"; 
	getId('mage').style.backgroundRepeat="no-repeat";
	}
	
	if(game.goldnow >= game.p4)
			getId('longbowman').style.background = ""; 
	else if(game.goldnow < game.p4) {
getId('longbowman').style.background = "grey"; 
	getId('longbowman').style.backgroundImage = "url('buttons/longbowman.png')"; 
	getId('longbowman').style.backgroundRepeat="no-repeat";
	}
if(game.goldnow >= game.p2)
			getId('paladin').style.background = ""; 
	else if(game.goldnow < game.p2) {
getId('paladin').style.background = "grey"; 
	getId('paladin').style.backgroundImage = "url('buttons/paladin.png')"; 
	getId('paladin').style.backgroundRepeat="no-repeat";
	}
	
	if(game.goldnow >= game.p6)
			getId('halberdier').style.background = ""; 
	else if(game.goldnow < game.p6) {
getId('halberdier').style.background = "grey"; 
	getId('halberdier').style.backgroundImage = "url('buttons/halberdier.png')"; 
	getId('halberdier').style.backgroundRepeat="no-repeat";
	}
	
		if(game.goldnow >= game.p7)
			getId('horsemen').style.background = ""; 
	else if(game.goldnow < game.p7) {
getId('horsemen').style.background = "grey"; 
	getId('horsemen').style.backgroundImage = "url('buttons/horsemen.png')"; 
	getId('horsemen').style.backgroundRepeat="no-repeat";
	}
		
		if(game.goldnow > 5)
		 getId('knight').style.visibility='visible'; 
		 if(game.goldnow > 400 && game.knight >=5 && game.archery >= 4)
		 getId('archer').style.visibility='visible'; 
		  if(game.goldnow > 1000 && game.archer >= 5 && game.mageguild >= 3)
		 getId('mage').style.visibility='visible'; 
	  if(game.goldnow > 1200 && game.mage >= 7 && game.archery >= 7)
		 getId('longbowman').style.visibility='visible'; 
		 if(game.goldnow > 1500 && game.knight >=8 && game.archer >= 6 && game.mage >=8 && game.longbowman >= 4)
		 getId('paladin').style.visibility='visible'; 
	 
	  if(game.goldnow > 2200 && game.knight >= 12 && game.paladin >= 8)
		 getId('halberdier').style.visibility='visible'; 
	 
	   if(game.goldnow > 4000 && game.mage >= 12 && game.paladin >=10  && game.halberdier >= 6)
		 getId('horsemen').style.visibility='visible'; 
			}		
			
	 if(game.lvl>=1 && game.ach1==0) {
		 game.goldnow+=1000;
		 game.overall+=1000;
		alertify.set({ delay: 5000 });
		alertify.log("<b>You got awarded 1000 gold for reaching Lvl 1! Congratulations !</b>");
		game.ach1=1;
		}
		
		 if(game.lvl>=10 && game.ach2==0) {
		 game.attribute+=1;
		 game.goldnow+=5000;
		 game.overall+=5000;
		alertify.set({ delay: 5000 });
		alertify.log("<b>You got awarded 1 Attribute Point and 5000 gold for reaching Lvl 10! Congratulations !</b>");
		game.ach2=1;
		}
		
				 if(game.knight>=20 && game.ach3==0) {
		 game.goldnow+=1000;
		 game.overall+=1000;
		alertify.set({ delay: 5000 });
		alertify.log("<b>You got awarded 1000 gold for having 20 knights in Your army! Congratulations !</b>");
		game.ach3=1;
		}
		
				 if(game.goldnow>=5000 && game.ach4==0) {
					 		game.exp+=150;
		game.lvlxp+=150;
			game.pro+=(150/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
					 
					 
		alertify.set({ delay: 5000 });
		alertify.log("<b>You got awarded 150xp for having 5000 gold! Congratulations !</b>");
		game.ach4=1;
		}
	 
			
			if (game.goldnow>4 && txt1!=1) { str='First steps in building the greatest empire.'; 
			getId('txt').style.visibility='visible'; 
			txt1=1; }
			else if (game.goldnow>9 && txt2!=1) {  str="Your castle is slowly getting bigger."; 
			txt2=1; }
			else if (game.goldnow>49 && txt3!=1) { str='Your people starts to admire You.'; 
		txt3=1; }
			else if (game.goldnow>99 && txt4!=1) { str='Strong Army is something every castle needs.'; 
		txt4=1; }
			else if (game.goldnow>199 && txt5!=1) { str='Your land is prospering.'; 
		txt5=1; }
			else if (game.goldnow>499 && txt6!=1) { str='Your enemies will think twice before attacking You.'; 
		txt6=1; }
			else if (game.goldnow>999 && txt7!=1) { str='Rich and prospering land will attract many fine warriors.'; 
		txt7=1; }
			getId('txt').innerHTML=str;
	  
	if(game.exp >= game.totalxp) {
	game.lvl+=1;
		game.attribute+=1;
		getId('lvl').innerHTML='Lvl ' + game.lvl;	
	game.exp=game.exp-game.totalxp;
	increment+=1;
	game.totalxp=(base*(game.lvl))+(increment*(.8*(game.lvl)*(game.lvl-1)));
	game.pro=(game.exp/game.totalxp*100);
	$('#progressbar').progressbar({ "value": game.pro});
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
			getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
			alertify.set({ delay: 3000 });
			alertify.error("You have advanced to level "+game.lvl);
	}
	
	if(game.goldnow < 0) {
		if(warning1==0) {
		warning1=1;
			alertify.alert("Your gold balance went below 0, watch out because if You reach debt of more than 500 You will get bankrupt and the game will be over.");
							setTimeout(function(){
warning1=0;
}, 20000);
		} 
		
		else if(game.goldnow < -250) {
		if(warning2==0) {
		warning2=1;
			alertify.alert("Your gold balance went below 250, watch out because if You reach debt of more than 500 You will get bankrupt and the game will be over.");
					setTimeout(function(){
warning2=0;
}, 20000);
		}
		
		
		 else if(game.goldnow < -500)
	{
		game.closewar=0;  //turn off block so cant abuse
				alertify.alert("You got bankrupt and You lost Your castle. <br><b>GAME OVER</b>");
			setTimeout(function(){
	localStorage.clear();
	location.reload();
}, 1500);
	}	
	}
	}
	
	}	
	
	base=210;
	increment=210;
		
		window.onload=function(){	
					$('#dollar').on('dragstart', function(event) { event.preventDefault(); });
					$('#promoimg').on('dragstart', function(event) { event.preventDefault(); });
			hideThis('knight');
			hideThis('archer');
			hideThis('mage');
			hideThis('longbowman');
				hideThis('paladin');
				hideThis('halberdier');
				hideThis('horsemen');
				buttons=true;
				buildings=false;
				achievments=false;
				stats=false;
				missions=false;
			
			hideThis('txt');
				hideThis('turnoffpromo');
				hideThis('back');
				hideThis('back2');
				hideThis('back3');
					hideThis('back4');
			hideThis('promobar');
			hideThis('promoimg');
			  hideThis('firsttime');
			getId('promoimg').disabled = true;
				startTimer4(0);
				for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden";
								if(localStorage.getItem("firstTime")==null){
getId('firsttime').style.visibility='visible'; 	
   localStorage.setItem("firstTime","done");
   			if (Storage !== void(0)) {
				getId('localcheck').innerHTML='<font size=2>Local Storage is turned <font color=green><u>[ON]</u></font> on your browser.</font>'; 
			}
			else {
					getId('localcheck').innerHTML='<font size=2>Local Storage is turned <font color=red><u>[OFF]</u></font> on your browser. Please turn it ON if You want to use this website without any inconvenients.</font>'; 
			}
			
			 document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
    };
}
				
				if (!localStorage['clickclick_save']) {
					return; }
					else {
					if(localStorage.getItem("autoload")=="yes" || localStorage.getItem("autoload")==null){
						var save_data = JSON.parse(atob(localStorage['clickclick_save']));
			game = save_data;
					update_view(); }
					else {
					return; }
					}
						
		}
		    
		  function ryc()
		  {
		  var b = 1*game.knight;
		  var c = game.goldnow-=b;
		  var xp1 = 1*game.knight;
		  game.kall-=b;
		  game.overall-=b;
		  game.overallpay+=b;
		   game.knightxp+=xp1;
		getId('knight').setAttribute('title', b.toFixed(1));
		
		game.exp+=xp1;
		game.lvlxp+=xp1;
			game.pro+=(xp1/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		
		   if(game.archer >= 1) {
		   var b = 5*game.archer;
		  var c = game.goldnow-=b;
		  var xp2 = 1*game.archer;
		   game.arall-=b;
		  game.overall-=b;
		   game.overallpay+=b;
		    game.arxp+=xp2;
		getId('archer').setAttribute('title', b.toFixed(1));  
				game.exp+=xp2;
		game.lvlxp+=xp2;
			game.pro+=(xp2/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		}
		
		   if(game.mage >= 1) {
		   var b = 8*game.mage;
		  var c = game.goldnow-=b;
		  var xp3 = 1*game.mage;
		   game.mall-=b;
		  game.overall-=b;
		  game.overallpay+=b;
		   game.magxp+=xp3;
		getId('mage').setAttribute('title', b.toFixed(1));  
				game.exp+=xp3;
		game.lvlxp+=xp3;
			game.pro+=(xp3/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		}
		
				   if(game.longbowman >= 1) {
		   var b = 10*game.longbowman;
		  var c = game.goldnow-=b;
		  var xp4 = 1*game.longbowman;
		   game.lgall-=b;
		  game.overall-=b;
		  game.overallpay+=b;
		   game.lgxp+=xp4;
		getId('longbowman').setAttribute('title', b.toFixed(1));  
				game.exp+=xp4;
		game.lvlxp+=xp4;
			game.pro+=(xp4/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		}
		
				   if(game.paladin >= 1) {
		   var b = 12*game.paladin;
		  var c = game.goldnow-=b;
		  var xp5 = 1*game.paladin;
		   game.pall-=b;
		  game.overall-=b;
		  game.overallpay+=b;
		   game.palxp+=xp5;
		getId('paladin').setAttribute('title', b.toFixed(1));  
				game.exp+=xp5;
		game.lvlxp+=xp5;
			game.pro+=(xp5/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		}
		
				   if(game.halberdier >= 1) {
		   var b = 15*game.halberdier;
		  var c = game.goldnow-=b;
		  var xp6 = 1*game.halberdier;
		   game.hlall-=b;
		  game.overall-=b;
		  game.overallpay+=b;
		   game.hlxp+=xp6;
		getId('halberdier').setAttribute('title', b.toFixed(1));  
				game.exp+=xp6;
		game.lvlxp+=xp6;
			game.pro+=(xp6/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		}
		
			   if(game.horsemen >= 1) {
		   var b = 25*game.horsemen;
		  var c = game.goldnow-=b;
		  var xp7 = 2*game.horsemen;
		   game.hrall-=b;
		  game.overall-=b;
		  game.overallpay+=b;
		  game.hrxp+=xp7;
		getId('horsemen').setAttribute('title', b.toFixed(1));  
				game.exp+=xp7;
		game.lvlxp+=xp7;
			game.pro+=(xp7/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		}
		   
		  }
		function dollar(x)
		{
		var a = game.goldnow+=game.clickcount;
	    game.overall+=game.clickcount;
		x.style.height="64px";
		x.style.width="64px";
		setTimeout(function(){x.style.height="80px";
		x.style.width="80px";},50);
		}
		function bigImg(x)
		{
		x.style.height="80px";
		x.style.width="80px";
		}
		function normalImg(x)
		{
		x.style.height="64px";
		x.style.width="64px";
		}
	
		 $(function() {
				$( "#dialog2" ).dialog({
				   autoOpen: false,		
	 resizable: false,
	draggable: false,
	 header: {
            left: 'dialog2',
            center: '',
            right: 'savecode,next'
        },
 close : function(){
    $('textarea').attr('readonly', 'readonly');
  }
				})}); 
			 
			 $(document).ready(function()
	  {
	  $('#box').mouseover(function(){
		  $(this).stop(true, false).animate({ height: "40px" });
	  });
	  $('#box').mouseout(function(){
	    $(this).stop(true, false).animate({ height: "24px" });
	  });
	  
	   $('#stats').mouseover(function(){
		  $(this).stop(true, false).animate({ height: "40px" });
	  });
	  $('#stats').mouseout(function(){
	    $(this).stop(true, false).animate({ height: "24px" });
	  });
	  
	  	   $('#missions').mouseover(function(){
		  $(this).stop(true, false).animate({ height: "40px" });
	  });
	  $('#missions').mouseout(function(){
	    $(this).stop(true, false).animate({ height: "24px" });
	  });
	  
	    $('#achievments').mouseover(function(){
		  $(this).stop(true, false).animate({ height: "40px" });
	  });
	  $('#achievments').mouseout(function(){
	    $(this).stop(true, false).animate({ height: "24px" });
	  });
	  
	});
	 $(function() {
	$( "#progressbar" ).progressbar({
	value: 0,
	create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color':'red'})}     //moge usunac, nie przydatne (spawdzic najpierw css jak to zgrac)
	});
	});
	$(function() {
	  $('#box').click(function() {
		 $('#leftside').load("includes/menu.php");
		 hideThis('name');
		 hideThis('box');
		  hideThis('back2');
		  hideThis('back3');
		    hideThis('back4');
		  		 achievments=false;
		 missions=false;
		 stats=false;
		  getId('back').style.visibility = 'visible';
		  getId('stats').style.visibility = 'visible';
		    getId('missions').style.visibility = 'visible';
			    getId('achievments').style.visibility = 'visible';
	  });
	});
	
	$(function() {
	  $('#back').click(function() {
		 $('#leftside').load("includes/left.php");
		 hideThis('back');
		 		 achievments=false;
		 missions=false;
		 stats=false;
		     getId('box').style.visibility = 'visible';
			   getId('name').style.visibility = 'visible';
			   	   		getId('achievments').style.visibility = 'visible';
					  getId('missions').style.visibility = 'visible';
	  });
	});
	
	////////
	
		$(function() {
	  $('#back2').click(function() {
		 $('#leftside').load("includes/left.php");
		 hideThis('back2');
				 achievments=false;
		 missions=false;
		 stats=false;
		  clearInterval(stimer1); 
		     getId('stats').style.visibility = 'visible';
			   getId('name').style.visibility = 'visible';
			   		getId('achievments').style.visibility = 'visible';
				  	  getId('box').style.visibility = 'visible';
					  getId('missions').style.visibility = 'visible';
			     
	  });
	});
	
		$(function() {
	  $('#stats').click(function() {
		 $('#leftside').load("includes/stats.php");
		 		   hideThis('name');
		  hideThis('back');
		  hideThis('stats');
		    hideThis('back3');
			    hideThis('back4');
		  stats=true;
		  		 achievments=false;
		 missions=false;
		  getId('back2').style.visibility = 'visible';
		   getId('box').style.visibility = 'visible';
		   	   getId('missions').style.visibility = 'visible';
			   getId('achievments').style.visibility = 'visible';
	  });
	});
	/////////
			$(function() {
	  $('#back3').click(function() {
		 $('#leftside').load("includes/left.php");
		 hideThis('back3');
			 achievments=false;
		 missions=false;
		 stats=false;
		  clearInterval(mtimer1); 
		     getId('missions').style.visibility = 'visible';
			    getId('name').style.visibility = 'visible';
				getId('achievments').style.visibility = 'visible';
				  	  getId('box').style.visibility = 'visible';
	  });
	});
	
		$(function() {
	  $('#missions').click(function() {
		 $('#leftside').load("includes/missions.php");
		 		   hideThis('name');
		  missions=true;
		  		 achievments=false;
		 stats=false;
		  hideThis('missions');
hideThis('back');
hideThis('back2');
hideThis('back4');
		  getId('back3').style.visibility = 'visible';
		  	  getId('stats').style.visibility = 'visible';
			  	  getId('box').style.visibility = 'visible';
				  getId('achievments').style.visibility = 'visible';
	  });
	});
	
	////////
	
				$(function() {
	  $('#back4').click(function() {
		 $('#leftside').load("includes/left.php");
		 hideThis('back4');
		 achievments=false;
		 missions=false;
		 stats=false;
		     getId('achievments').style.visibility = 'visible';
			    getId('name').style.visibility = 'visible';
				  	  getId('stats').style.visibility = 'visible';
			  	  getId('box').style.visibility = 'visible';
	  });
	});
	
		$(function() {
	  $('#achievments').click(function() {
		 $('#leftside').load("includes/achievments.php");
		 hideThis('name');
		  achievments=true;
		 missions=false;
		 stats=false;
		  hideThis('achievments');
hideThis('back');
hideThis('back2');
hideThis('back3');
		  getId('back4').style.visibility = 'visible';
		  	  getId('stats').style.visibility = 'visible';
			  	  getId('box').style.visibility = 'visible';
				  getId('missions').style.visibility = 'visible';
	  });
	});
	
	$(function() {
	  $('#build').click(function() {
		 $('#buttons').load("includes/buildings.php");
		  buildings=true;
		  
hideThis('build');
  getId('army').style.visibility = 'visible';
	  });
	});
	
	////////
	
	
		var timerx=1;
	
		function customTheme1()
		{
	
		if(timerx!=0) {
  	document.body.style.backgroundImage="url('img/castle1.jpg')";
	timerx=0;
	game.theme=0;
	setTimeout(function(){
timerx=1;
}, 5000);
} else alertify.alert("You need to wait 5 seconds to change the theme again."); }
			function customTheme2()
		{
	
		if(timerx!=0) {
  	document.body.style.backgroundImage="url('img/castle2.jpg')";
	timerx=0;
	game.theme=1;
	setTimeout(function(){
timerx=1;
}, 5000);
} else alertify.alert("You need to wait 5 seconds to change the theme again."); }
			function customTheme3()
		{
	
		if(timerx!=0) {
  	document.body.style.backgroundImage="url('img/castle3.jpg')";
	timerx=0;
	game.theme=2;
	setTimeout(function(){
timerx=1;
}, 5000);
} else alertify.alert("You need to wait 5 seconds to change the theme again."); }
	
	
	var timeInSecs3;
var ticker3;
function startTimer3(secs){
timeInSecs3 = parseInt(secs)-1;
ticker3 = setInterval("tick3()",1000);  
}
function tick3() {
game.secs = timeInSecs3;
if (game.secs>0) {
timeInSecs3--;
}
else {
clearInterval(ticker3); 
 game.pwdtimer=1;
  ticker3=null;
}
}
	
	var timeInSecs4;
var ticker4;
function startTimer4(secs){
timeInSecs4 = parseInt(secs)+1;
ticker4 = setInterval("tick4()",1000);   
}
function tick4() {
game.alltime = timeInSecs4;
if (game.alltime>=0) {
timeInSecs4++;
}
else {
clearInterval(ticker4); 
  ticker4=null;
}
}
		
	var mtime1;
	var mtime2;
	
	function miss1()                        
		{
	if(game.m1not==0 || game.s1 > 0) { 
	if(game.doingmiss==0 || (game.s1 > 0 && game.m2dur==0)) {
	if(game.knight >=5 && game.goldnow >= 500) {
	mtime1 = setInterval(function(){t1()},1000);
	  getId('firstmission').style.visibility = 'visible';
	   getId('mission1').style.visibility = 'hidden';
	game.doingmiss=1;
	game.m1dur=1;
	} else alertify.alert("You do not meet the requirements."); 
	} else alertify.alert("You are during another mission now."); 
	} else alertify.alert("You already did that mission."); 
		
	function t1() {
if(game.s1>0)
	game.s1--;
else {
	clearInterval(mtime1);
	game.m1not=1;
game.m1did=1;
game.m1dur=0;
game.doingmiss=0;
hideThis('firstmission'); 
	var a = game.goldnow+=1000;
	    game.overall+=a;
}
}
		}
				
			function miss2()                        
		{
	if(game.m2not==0 || game.s2 > 0) { 
	if(game.doingmiss==0 || (game.s2 > 0 && game.m1dur==0)) {
	if(game.knight >=10 && game.archer >=5 && game.mage >=2 && game.intelligence>=2 && game.strength >=3 && game.goldnow >= 2500) {
	mtime2 = setInterval(function(){t2()},1000);
	  getId('secondmission').style.visibility = 'visible';
	     getId('mission2').style.visibility = 'hidden';
	game.doingmiss=1;
	game.m2dur=1;
	} else alertify.alert("You do not meet the requirements."); 
	} else alertify.alert("You are during another mission now."); 
	} else alertify.alert("You already did that mission."); 
		
	function t2() {
if(game.s2>0)
	game.s2--;
else {
	clearInterval(mtime2);
	game.m2not=1;
game.m2did=1;
game.m2dur=0;
game.doingmiss=0;
hideThis('secondmission'); 
	var a = game.goldnow+=8000;
	    game.overall+=a;
		
		game.exp+=500;
		game.lvlxp+=500;
			game.pro+=(500/game.totalxp*100); 
$('#progressbar').progressbar({ "value": game.pro});
		getId('lvlxp').innerHTML=Beautify(game.lvlxp)+' xp'; 
			getId('nextlvl').innerHTML=Beautify(game.exp)+' / '+Beautify(game.totalxp); 
					getId('progressbar').setAttribute('title', Beautify(game.exp)+ " / " +Beautify(game.totalxp));
		  alertify.log("<font color=red><b><center>You have finished Your mission, as a reward You got 8000 gold and 500xp.</center></b></font>", "", 10000);	
		var xoz1 = Math.floor((Math.random()*100)+1);
		var xoz2 = Math.floor((Math.random()*1800)+250);
		if(xoz1>=20)
			return false;
		else {
		game.goldnow+=xoz2;
			game.overall+=xoz2; 
  alertify.log("<font color=red><b><center>Unfortunately during mission You <u>lost</u> " +xoz2+ "$</center></b></font>", "", 10000);	
		}		
}
}
}
var astimer = 0;
function auto_save() {
		if(astimer==0) {
	if(game.autosave==0) {   //auto save off
		game.autosave=1; //on
		getId('autosave').value="Auto Save [ON]"; 
		alertify.success("Auto Save every 5 minutes turned ON.");
		astimer=1;
		setTimeout(function(){
astimer=0;
}, 10000);
	}
		else  { 
		game.autosave=0;  //off
		getId('autosave').value="Auto Save [OFF]"; 
		alertify.error("Auto Save turned OFF.");
astimer=1;
setTimeout(function(){
astimer=0;
}, 10000);
		}
	}  else alertify.alert("You need to wait at least 10 seconds before switching the button.");
}
		function securepwd()                        
		{
alertify.prompt("Type in Your password<br>Min 3 signs / Max 6 signs", function (e, str) {
    if (e) {
	if(game.pwdtimer!=0) {
	if(str.length>=3 && str.length<=6) {
       game.pass = str;
	   alertify.alert("Password approved. Please remember Your new password.");
	   game.pwdtimer=0;
	startTimer3(3600);
} else alertify.alert("Your password can't use less than 3 signs and more than 6.");
} else alertify.alert("You can change your password only once per 1 hour. <br> Time left: "+Beautify(game.secs/3600)+" hour(s) and "+Beautify((game.secs / 60) % 60) +" minute(s).");
    } else {
    }
}, "password");
	}	
	
		function reset_game() {
   var seconds = game.alltime % 60;
    var minutes = Math.floor(game.alltime / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;
alertify.confirm("Are you sure you want to restart your game? It will remove your basic save and all the settings but all the save codes will stay untouched!", function (e) {
    if (e) {
alertify.prompt("Write your security password", function (ex, str) {
    if (ex) {
		if(hours >= 1) {
		if (game.pass == str && str.length>0){ 
		    localStorage.clear();
	location.reload();
		} else alertify.alert("Incorrect Password"); 
		} else alertify.alert("Your account need to have at least 1 hour on record to use Reset system. Your account is: "+hours+" hour(s), "+minutes+" minute(s) and "+seconds+" second(s) old."); 
    } else {
    }
}, "password");
	
	
    } else {
    }
});
}
	
$(function () {
    $.extend($.easing, {
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        }
    });
    var mouseListener = function (event) {
        if (!window.mouse) window.mouse = {
            x: 0,
            y: 0
        };
        window.mouse.x = event.clientX || event.pageX;
        window.mouse.y = event.clientY || event.pageY;
    };
    document.addEventListener('mousemove', mouseListener, false);
    var fly = function() {
        
        var hoveringSelection = $("<div class='flying'>+"+(game.clickcount).toFixed(1)+"</div>");
        var dropdownToggle = $('#add');
        hoveringSelection.css({
            position: 'absolute',
            top: window.mouse.y-50,
            left: window.mouse.x,
            display: 'block',
            opacity: 1.0
        })
            .appendTo('body')
            .animate({
            top: dropdownToggle.offset().top,
       
            opacity: 0.01
            
        }, 1000, 'easeOutCubic' ,function(){
            $(this).remove();
      });
        
    };
    $('#dollar').click(fly);
});
		
	String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
	function changeName() {
alertify.prompt("Type name of Your castle.<br>Between 5 to 10 signs long.", function (e, str) {
    if (e) {
			if(str.length>=5 && str.length<=10) {
				if(str != game.name && str.capitalize() != game.name) {
				      game.name = str.capitalize();
     	getId('name').innerHTML=str.capitalize()+"'s Castle";
			} else alertify.alert("You already have that name.");
			} else alertify.alert("Name of the castle you chosed is either too short or too long.");
    } else {
    }
}, "Name of your castle");	
	}
	
	
	var hidetool = null;
/***********************************************
* Cool DHTML tooltip script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/
var offsetxpoint=-200 //Customize x offset of tooltip
var offsetypoint=-35 //Customize y offset of tooltip
var ie=document.all
var ns6=document.getElementById && !document.all
var enabletip=false
if (ie||ns6)
var tipobj=document.all? document.all["dhtmltooltip"] : document.getElementById? document.getElementById("dhtmltooltip") : ""
function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
function ddrivetip(thetext, thecolor, thewidth){
if (ns6||ie){
if (typeof thewidth!="undefined") tipobj.style.width=thewidth+"px"
if (typeof thecolor!="undefined" && thecolor!="") tipobj.style.backgroundColor=thecolor
tipobj.innerHTML=thetext
enabletip=true
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
hidetool = setTimeout(function(){
hideddrivetip2();
}, 10000);
}
return false
}
}
function positiontip(e){
if (enabletip){
var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
//Find out how close the mouse is to the corner of the window
var rightedge=ie&&!window.opera? ietruebody().clientWidth-event.clientX-offsetxpoint : window.innerWidth-e.clientX-offsetxpoint-20
var bottomedge=ie&&!window.opera? ietruebody().clientHeight-event.clientY-offsetypoint : window.innerHeight-e.clientY-offsetypoint-20
var leftedge=(offsetxpoint<0)? offsetxpoint*(-1) : -1000
//if the horizontal distance isn't enough to accomodate the width of the context menu
if (rightedge<tipobj.offsetWidth)
//move the horizontal position of the menu to the left by it's width
tipobj.style.left=ie? ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px" : window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
else if (curX<leftedge)
tipobj.style.left="5px"
else
//position the horizontal position of the menu where the mouse is positioned
tipobj.style.left=curX+offsetxpoint+"px"
//same concept with the vertical position
if (bottomedge<tipobj.offsetHeight)
tipobj.style.top=ie? ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px" : window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px"
else
tipobj.style.top=curY+offsetypoint+"px"
tipobj.style.visibility="visible"
}
}
function hideddrivetip(){
if (ns6||ie){
enabletip=false
tipobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
tipobj.style.width=''
}
}
function hideddrivetip2 (thetext, thecolor, thewidth) {
if (ns6||ie){
	if(enabletip==true) {
tipobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
tipobj.style.width=''
clearTimeout(hidetool);
hidetool = setTimeout(function(){
hideddrivetip2();
}, 10000);
	}
}
}
document.onmousemove=positiontip
/******************************************
* Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
* Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
* Last updated Nov 9th, 05' by DD. This notice must stay intact for use
******************************************/
  
 
  
  //Configure below to change URL path to the snow image
  var snowsrc="img/gold.png"
  // Configure below to change number of snow to render
  var no = 20;
  // Configure whether snow should disappear after x seconds (0=never):
  var hidesnowtime = 100;
  // Configure how much snow should drop down before fading ("windowheight" or "pageheight")
  var snowdistance = "pageheight";
///////////Stop Config//////////////////////////////////
  var ie4up = (document.all) ? 1 : 0;
  var ns6up = (document.getElementById&&!document.all) ? 1 : 0;
  
	function iecompattest(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
	}
  var dx, xp, yp;    // coordinate and position variables
  var am, stx, sty;  // amplitude and step variables
  var i, doc_width = 800, doc_height = 600; 
  
  if (ns6up) {
    doc_width = self.innerWidth;
    doc_height = self.innerHeight;
  } else if (ie4up) {
    doc_width = iecompattest().clientWidth;
    doc_height = iecompattest().clientHeight;
  }
  dx = new Array();
  xp = new Array();
  yp = new Array();
  am = new Array();
  stx = new Array();
  sty = new Array();
  snowsrc=(snowsrc.indexOf("#")!=-1)? "treasure.png" : snowsrc
  for (i = 0; i < no; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
		if (ie4up||ns6up) {
      if (i == 0) {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><a href=\"#\"><img src='"+snowsrc+"' border=\"0\"><\/a><\/div>");
      } else {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='"+snowsrc+"' border=\"0\"><\/div>");
      }
    }
  }
  
  function snowIE_NS6() { // IE and NS6 main animation function
    doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;
		doc_height=(window.innerHeight && snowdistance=="windowheight")? window.innerHeight : (ie4up && snowdistance=="windowheight")?  iecompattest().clientHeight : (ie4up && !window.opera && snowdistance=="pageheight")? iecompattest().scrollHeight : iecompattest().offsetHeight;
    for (i = 0; i < no; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top=yp[i]+"px";
      document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";  
    }
    snowtimer=setTimeout("snowIE_NS6()", 10);
  } 
	function hidesnow(){
		if (window.snowtimer) clearTimeout(snowtimer)
		for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden";
	}