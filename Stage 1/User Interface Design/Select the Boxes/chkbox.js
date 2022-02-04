var checkedCount=0;

$('#red').change(function(){
    var isCheck=$(this).is(":checked");
    if (isCheck) {
        checkedCount++;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    } else {
        checkedCount--;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    }
})

$('#green').change(function(){
    var isCheck=$(this).is(":checked");
    if (isCheck) {
        checkedCount++;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    } else {
        checkedCount--;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    }
})

$('#blue').change(function(){
    var isCheck=$(this).is(":checked");
    if (isCheck) {
        checkedCount++;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    } else {
        checkedCount--;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    }
})

$('#black').change(function(){
    var isCheck=$(this).is(":checked");
    if (isCheck) {
        checkedCount++;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    } else {
        checkedCount--;
        checkedCount == 1 ? $('#result').html(checkedCount+" box is checked") : $('#result').html(checkedCount+" boxes are checked");
    }
})
