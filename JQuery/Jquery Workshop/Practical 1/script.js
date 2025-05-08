
$(document).ready(function() {

    // For aleat box
    // alert("hi ashok!");

    $(".container").css("background-color", "crimson");

    $("h1").css({
        "color" : "#fff",
        "text-transform" : "capitalize",
        "text-align" : "left"
    })

    $("h2").css({
        "color" : "#fff",
        "text-transform" : "capitalize",
        "text-align" : "center"
    })

    $("h3").css({
        "color" : "#fff",
        "text-transform" : "uppercase",
        "text-align" : "right",
        "cursor": "pointer"
    }).click(function(){
        alert("this is h3 tag!");
    })
})