if(document.querySelector(".accordion__btn")) {
    $(".accordion__btn").click(function() {
        $(this).toggleClass('active');
    });
};