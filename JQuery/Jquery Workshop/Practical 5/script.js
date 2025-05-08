
$("document").ready(()=>{
    
    function changimg(){
        var changeUrl = "https://source.unsplash.com/random/1260x600?sign=" + Math.floor(Math.random()*1000); //Default Url for Random Img
        $("#ImgBox").css({
            "background-image" : "url(" + changeUrl + ")"
        });
    }

    // calling the function for first time manually to get the default image in background
    changimg();

    $("button").click(()=>{
        changimg();
    })
})