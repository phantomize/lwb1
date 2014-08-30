// Begin layout JS
$(document).ready(function() {
var theScroll;
function scroll(){
theScroll = new iScroll('wrapper');
}

document.addEventListener('DOMContentLoaded', scroll, false);

$('#tab-bar').find('a').on('click', function(e){
console.log("some one clicked me");
e.preventDefault();
var nextPage = $(e.target.hash);
page(nextPage); //You need to add this for it to work
$("#pages").find(".current").removeClass("current");
nextPage.addClass("current");
});

function page(toPage) {
var toPage = $(toPage),
fromPage = $("#pages").find(".current");
if(toPage.hasClass("current") || toPage === fromPage) {
return;
}

toPage.addClass("current fade in").one("webkitAnimationEnd", function(){
fromPage.removeClass("current fade out");
toPage.removeClass("fade in")
});

fromPage.addClass("fade out");
}
})
//End layout JS

// original annotate.html JS

    $('#clientForm').submit(function() {
        var currentClient = JSON.stringify({
            "firstName" : $('#firstName').val(),
            "lastName" : $('#lastName').val(),
            "shelter" : $('#shelter').is(':checked'),
            "comms" : $('#comms').is(':checked')
        })
        localStorage.setItem(localStorage.length, currentClient)
    })

// end original annotate.html JS