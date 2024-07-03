$( document ).ready(function() {
    
    $( "article img" ).click(function() {
        var src = $(this).attr("src");
        $( "#big-pic" ).attr("src", src);
        $( "div.big-img" ).toggleClass("on");
        
        $( "body" ).toggleClass("noscroll");
    });
    
    $( "div.big-img, #close" ).click(function(e) {
        if (e.target !== this)
            return;
        $( "div.big-img" ).toggleClass("on");
        $( "body" ).toggleClass("noscroll");
    });

    // $.get('links.html', function(data) {
    //     $('#links').append(data);
    // });
    
});