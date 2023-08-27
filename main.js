(function() {
    'use strict';

    function show(){ 
        $("#ad").show();
    }
document.addEventListener("load", function(){
    // ....
      setTimeout(function(){ 
        $("<button id=\"\" onclick=\"show();\">Show Player</button>").insertBefore("body");
          document.getElementById("one").style.width = "50%;
    }, 10000);
    
});
  

    
  const video = document.getElementById('video');
  const ui = video.ui;
  const controls = ui.getControls();
  const player = controls.getPlayer();
  const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
  ui.configure(config);

    
})();
