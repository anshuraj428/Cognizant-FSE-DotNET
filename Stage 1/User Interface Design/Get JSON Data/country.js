$("#btn-id").on('click', function(){
    $.getJSON('https://reqres.in/api/users?page=2', function(jsonData){
        var dataToAppend = '';
        $.each(jsonData.data, function(index,element){
            dataToAppend += "<li>"+element.id+" -- "+element.email+"</li>"
        })
        $('#data-id').append("<ul>"+dataToAppend+"</ul>");
    })
})
