$("button").click(function(){
    var name = $("#txt").val();
    var result = '"Welcome ' + name + '!"'
    $("#address").html(result);
})
