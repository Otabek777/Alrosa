if(document.querySelector(".accordion__btn")) {
    $(".accordion__btn").click(function() {
        $(this).toggleClass('active');
    });
};
$(".header__burgir button").click(function() {
    $(this).toggleClass('active');
    $(".header_mobile__menu").toggleClass('active');
    $("body").toggleClass('hidden');
});
$(".header_mobile__menu .item").click(function() {
    $(this).toggleClass('active');
});

$(".btn_search .open").click(function() {
    $(".btn_search").addClass('active');
});
$(".main").click(function() {
    $(".header .btn_search").removeClass('active');
});
$(".footer").click(function() {
    $(".header .btn_search").removeClass('active');
});
$(".header_mobile__menu ").click(function() {
    $(".header .btn_search").removeClass('active');
});

$(".header__navbar .ul_top .item").hover(function() {
    $(".header_desctop__menu").addClass('active');
    $("body").addClass('hidden');
});
$(".header_desctop__menu .wrap").hover(function() {
    $(".header_desctop__menu .wrap").mouseleave(function() {
        $(".header_desctop__menu").removeClass('active');
        $("body").removeClass('hidden');
    });
});
$(".header_desctop__menu .close").click(function() {
    $(".header_desctop__menu").removeClass('active');
    $("body").removeClass('hidden');
});
