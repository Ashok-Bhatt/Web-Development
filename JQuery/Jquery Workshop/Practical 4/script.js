
$("document").ready(()=>{
    let status = true;
    $("h2").click(()=>{
        if (status){
            $("#text").slideDown("slow");
        } else {
            $("#text").slideUp("slow");
        }
        status = !status;
    })
})