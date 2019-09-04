// Check off specific ToDo's by clicking
$("ul").on("click", "li", function(){
    // toggles if is completed or not very time is clicked
    $(this).toggleClass("completed");
});

//Removes an ToDo when the "X" is clicked
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // Grab the new ToDo's text (input)
        let todoText = $(this).val();
        $(this).val("");
        // Create new LI and add it to the UL
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>")
    }
});

$("i.fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});