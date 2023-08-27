(function() {
    'use strict';
  const video = document.getElementById('video');
  const ui = video.ui;
  const controls = ui.getControls();
  const player = controls.getPlayer();
  const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
  ui.configure(config);
    function show(){ 
        $("#ad").show();
    }
setTimeout(function(){ 
$("<button id=\"\" onclick=\"show();\">Show Player</button>").insertBefore("body");
}, 10000);

    
})();
