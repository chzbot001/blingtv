(function() {
    'use strict';


    if (window.location.pathname == "/playerX.php") {
        $(document).ready(function(){
        $("<button style=\"background-color: #00f6ff;color: black;\" id=\"showplayer\">Show Player (กรณีจอหาย)</button>").insertBefore("#one > center > div > h3");
        $("#ad").css({ "text-align": "center", "margin-left": "auto", "margin-right": "auto" });
        $("#showplayer").on( "click", function() {
            document.getElementById("ad").style.display = "block";
        } );
             } );
        document.getElementById("ad").style.width = "70%";
        document.getElementById("ustreamIframe").style.height = "700px";
    }
    else if (window.location.pathname == "/player2X.php"){

        setTimeout(function(){
            const video = document.getElementById('video');
            const ui = video['ui'];
            const controls = ui.getControls();
            const player = controls.getPlayer();
            const config = {'controlPanelElements': ['play_pause','mute','volume','quality','language','overflow_menu','fullscreen']};
            ui.configure(config);

        }, 3500);

    }

})();
