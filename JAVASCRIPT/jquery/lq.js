$(document).ready(function(){
    $("#btn").click(function(){
       //alert("helo")
       $(".box").fadeToggle(1000)
    })
    $(".box").mouseenter(function(){
        $(this).css({"background-color":"red"})
    })
     $(".box").mouseleave(function(){
     $(this).css({"background-color":"blue"})
    })
})

