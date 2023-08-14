(function() {
    'use strict';
              setTimeout(function(){
                  $("#ad").show();
                  console.log("show");
              }, 242000);//242000
  const video = document.getElementById('video');
  const ui = video.ui;
  const controls = ui.getControls();
  const player = controls.getPlayer();
  const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
  ui.configure(config);
})();