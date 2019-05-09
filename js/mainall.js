//預載動畫
$(window).on('load', function () {
    $(".loading").fadeOut(400);//關閉loading
});
//預載動畫



$(function () {
   
    $(window).scroll(function () {
        var windowHeight = $(window).height(); //視窗高
        var windowWidth = $(window).width(); //視窗高
        var scrollTop = $(window).scrollTop() //現在高
        var scrollLeft = $(window).scrollLeft() //現在高
        var scrollPosition = windowHeight + scrollTop; //螢幕高+滑動範圍
        var docHeight = $(document).height();//HTML總長度
        //動畫用
        $(".animated").each(function () {
            animation_this = $(this);
            //確保最下層的動畫可顯現
            // if(scrollPosition+(scrollPosition/3)>docHeight){

            //從底部開始計算，如果物件已經過了可視範圍底部，即顯現
            if (scrollPosition+200 > animation_this.offset().top) {
                animation_this.css("animation-play-state", "running");
            };
        });


    }).scroll();

});