(function() {
    'use strict';
  const video = document.getElementById('video');
  const ui = video.ui;
  const controls = ui.getControls();
  const player = controls.getPlayer();
  const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
  ui.configure(config);

var widget = document.getElementById("ad");
widget.innerHTML = '<button id="mahbutton" href="javascript:show()">Show Player</button>';
var w_btn = document.getElementById("mahbutton");
    function() {
        $("#ad").show();
    }
})();
