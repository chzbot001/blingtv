/*(function() {
    'use strict';
*/
/*function showplayer(){
        document.getElementById("ad").style.display = "block";
    }*/
$("#showplayer").on( "click", function() {
document.getElementById("ad").style.display = "block";
} );
    
    $(document).ready(function(){ 
        $("<button id=\"showplayer\" onclick=\"showplayer()\">Show Player</button>").insertBefore("div.flex-item");
        $("<button id=\"showui\" onclick=\"showui()\">Show Player Controls</button>").insertBefore("div.flex-item");
        document.getElementById("ad").style.width = "60%";
        
const video = document.getElementById('video');
  const ui = video.ui;
  const controls = ui.getControls();
  const player = controls.getPlayer();
  const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
  ui.configure(config);
    });
/*
})();*/
