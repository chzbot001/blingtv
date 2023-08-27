(function() {
    'use strict';
  const video = document.getElementById('video');
  const ui = video.ui;
  const controls = ui.getControls();
  const player = controls.getPlayer();
  const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
  ui.configure(config);

function onButtonClick() {
  alert('Button clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);


/*
var widget = document.getElementById("ad");
widget.innerHTML = '<button id="mahbutton" href="javascript:show()">Show Player</button>';
var w_btn = document.getElementById("mahbutton");

function(){ 
       $("#ad").hide();
}
    function show() {
        $("#ad").show();
    }*/
})();
