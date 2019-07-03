var timer = null;
$('.nav ul li').click(function (){
    $(this).find('.c_menus').show();
});

$('.c_menusn1li.m1').hover(function (){

    clearTimeout(timer);
    $('.c_menus_three').hide();
    $('.c_menus_two').hide();
    $(this).find('.c_menus_two').show();

},function (){
    timer = setTimeout(function (){
        $('.c_menus').hide();
        $('.c_menus_two').hide();
    },300);
});

$('.c_menusn1li.m2').hover(function (){
    $('.c_menus_three').hide();
    $(this).find('.c_menus_three').show();

});

$('.c_menus_three').hover(function (){
    clearTimeout(timer);

});