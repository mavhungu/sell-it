(function(){
    "use strict";
    $(".app-header-toggle").click(function(event){
        event.preventDefault();
        $(".app").toggleClass("app-slidebar-toggled");
    });
})();