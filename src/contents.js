chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if ( "tabOff" == request ){
        tabShow(false);
    }
    else if ( "tabOn" == request){
        tabShow(true);
    }
});

function tabShow( mode ){
    if(mode){    
        $(".side-nav").show();    
    }
    else{
        $(".side-nav").hide();
    }
}