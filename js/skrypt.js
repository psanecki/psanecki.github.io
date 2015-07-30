 $(function(){
    $("body").fadeOut(1000,function(){
       window.location.href = "http://test.example.com/;";
    });
 });
$(function(){
    $("body").hide();
    $("body").fadeIn(1000);
 });

var handler = function(){
       //...torment kittens here...
};
for (var ls = document.links, numLinks = ls.length, i=0; i<numLinks; i++){
    ls[i].onclick= handler;
}


$('.cancel-action').click(function(){
    alert('Cancel action occurs!');
});

// Hover shim for Internet Explorer 6 and Internet Explorer 7.
$(document.body).on('hover','a',function(){
    $(this).toggleClass('hover');
});

a { cursor: pointer; color: blue; }
a:hover,a.hover { text-decoration: underline; }
