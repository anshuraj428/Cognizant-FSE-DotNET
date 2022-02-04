$(".add-row").click(function(){
    var customerName = $("#name").val();
    
    var tableData = '<tr><td><input type="checkbox" name="record"></td><td>'+ customerName + '</td></tr>';
    
    $("#frm table tbody").append(tableData);
})

$('.delete-row').click(function(){
    $('input:checked').parents('tr').remove();
})
