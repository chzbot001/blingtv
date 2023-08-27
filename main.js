/*(function() {
    'use strict';
*/
    const show = function (){ 
        $("#ad").show();
    }
    const showui = function (){
        const video = document.getElementById('video');
      const ui = video.ui;
      const controls = ui.getControls();
      const player = controls.getPlayer();
      const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
      ui.configure(config);
    }
    
    
    $(document).ready(function(){ 
        $("<button id=\"\" onclick=\"show();\">Show Player</button>").insertBefore("div.flex-item");
        $("<button id=\"\" onclick=\"showui();\">Show Player Controls</button>").insertBefore("div.flex-item");
        document.getElementById("ustreamIframe").style.width = "900px";    
});
      const video = document.getElementById('video');
      const ui = video.ui;
      const controls = ui.getControls();
      const player = controls.getPlayer();
      const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
      ui.configure(config);
/*
})();*/
