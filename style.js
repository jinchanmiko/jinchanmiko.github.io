//ga
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-137270771-1');

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