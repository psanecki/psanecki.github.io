var coMaZniknac = ".zawartosc"


window.onbeforeunload = function() {
     $(coMaZniknac).fadeOut(0);
    //$(coMaZniknac).fadeIn(0);
};

$(document).ready(function() {
    $(coMaZniknac).css("display", "none");
    
    $(coMaZniknac).fadeIn(500);
    
    $("a").click(function(event){
	event.preventDefault();

	linkLocation = this.href;
	//window.alert(linkLocation);
	if(linkLocation.endsWith( "#") ||
	  linkLocation === "../index.html"){
		$(coMaZniknac).fadeIn(0);
	    } else {
		$(coMaZniknac).fadeOut(500, redirectPage);
	    }
    });
    
    function redirectPage() {
	window.location = linkLocation;
    }
});
