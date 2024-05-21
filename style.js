//ga
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-25T1V2ETND');

//TOPページnav
$(function(){
var _window = $(window),
    _header = $('.luxbar-fixed'),
    heroBottom;
 
_window.on('scroll',function(){
 //   heroBottom = $('.ab').height();
    if(_window.scrollTop() > 500){
        _header.addClass('show');   
    }
    else{
        _header.removeClass('show');   
    }
});
 
_window.trigger('scroll');
});

//TOPページ＃リンクをクリックでチェックボックスOFF
$(function(){
    $(".chkbox").on("click", function (evt) {

        chk_status = $("#luxbar-checkbox").prop("checked");

        if(chk_status){
            $("#luxbar-checkbox").prop("checked", false);
        }else{
            $("#luxbar-checkbox").prop("checked", true);
        }
    });
});
//fancyboxオプション設定
$(function(){
$('[data-fancybox="message"]').fancybox({
	buttons : ["slideShow","close"],
    animationDuration: 500,
    transitionEffect: "zoom-in-out",
    transitionDuration: 1000,
    slideShow: {speed:8000},
    mobile:{clickSlide:"close"}
});
});