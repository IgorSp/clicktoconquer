<script language="javascript">
	$(function() {
	   $( menu ).tooltip({	
	      autoOpen: true,	
		  track:false,
		   position: {
my: "left top",
at: "right+5 top-5"
},
        open: function (event, ui) {
            setTimeout(function () {
                $(ui.tooltip).fadeOut('slow');
            }, 2000);
        }
		});
	});
	
					if(game.autosave==0) 
				getId('autosave').value="Auto Save [OFF]"; 
	else 
	getId('autosave').value="Auto Save [ON]"; 
			if(game.closewar==0) 
				getId('closewarning').value="Close Warning [OFF]"; 
	else 
	getId('closewarning').value="Close Warning [ON]"; 
	if(localStorage.getItem("autoload")=="yes" || localStorage.getItem("autoload")==null) 
				getId('autoload').value="Auto Load [ON]"; 
	else 
				getId('autoload').value="Auto Load [OFF]"; 
</script>
<style>
#menu {
	position: absolute;
	z-index:10;
}
</style>
<div id="menu">
<input type="button" style="width:150;height:25" id="password" title="Set password for the reset system" value="Password" onClick="securepwd()">
<br>
<input type="button" style="width:150;height:25" id="save" title="Save your current game" value="Save" onClick="save_game()">
<br>
<input type="button" style="width:150;height:25" id="load" title="Load previously saved game" value="Load" onClick="load_game()">
<br>
<input type="button" style="width:150;height:25" id="clear" title="Remove the save and reset the game" value="Reset" onClick="reset_game()">
<br>
<input type="button" style="width:150;height:25" id="loadcode" title="Use the save code to load the game" value="Load Code" onClick="load_custom_game()">
<br>
<input type="button" style="width:150;height:25" id="savecode" title="Get save of your game in the code" value="Save Code" onClick="code_save()">
<br>
<input type="button" style="width:150;height:25" id="autosave" title="Turn on/off auto save every 5 minutes" value="Auto save [On]" onClick="auto_save()">
<br>
<input type="button" style="width:150;height:25" id="closewarning" title="Turn on/off warning before closing tab" value="Close Warning [On]" onClick="close_warning()">
<br>
<input type="button" style="width:150;height:25" id="autoload" title="Turn on/off auto load" value="Auto Load [On]" onClick="auto_load()">
</div> 