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
        $("<button id=\"\" onclick=\"show();\">Show Player</button>").insertBefore("body");
        $("<button id=\"\" onclick=\"showui();\">Show Player UI</button>").insertBefore("body");
        document.getElementById("one").style.width = "65%";    
});
/*
})();*/
