/*(function() {
    'use strict';
*/

    
    $(document).ready(function(){ 
        $("<button id=\"\" onlick=\"showplayer()\">Show Player</button>").insertBefore("div.flex-item");
        $("<button id=\"\" onlick=\"showui()\">Show Player Controls</button>").insertBefore("div.flex-item");
        document.getElementById("ad").style.width = "60%";    
        
    const show = function (){ 
        $("#ad").show();
    }
    const showui = function (){
      const video = document.getElementById('video');
      const ui = video.ui;
      const controls = ui.getControls();
      const player = controls.getPlayer();
      const config = {'controlPanelElements': ['play_pause','volume','quality','overflow_menu','fullscreen']};
      ui.configure(config);
    }
});
/*
})();*/
