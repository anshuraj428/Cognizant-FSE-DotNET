$('#btn-id').on('click', function(){
    $.ajax({
        url: 'employee.json',
        error : function(){
            $('#err-id').html('Error Message: Not found')
        }
    })
})
