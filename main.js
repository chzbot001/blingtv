/*(function() {
    'use strict';
*/
    function show(){ 
        $("#ad").show();
    }
    function showui(){
        const video = document.getElementById('video');
      const ui = video.ui;
      const controls = ui.getControls();
      const player = controls.getPlayer();
      const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
      ui.configure(config);
    }
    
    
    $(document).ready(function(){ 
        $("<button id=\"\" onclick=\"show();\">Show Player</button>").insertBefore("video");
        $("<button id=\"\" onclick=\"showui();\">Show Player Controls</button>").insertBefore("video");
        document.getElementById("ustreamIframe").style.width = "900px";    
});
/*
})();*/
