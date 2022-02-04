var verticalMenuList = $("div > ul > li > a");
console.log(verticalMenuList);

$("#each_ex").on('click', function(){
    verticalMenuList.css('background', 'red')
    $('#msg_ex').append('Home<br>Products<br>Services<br>About<br>Contact');
})
