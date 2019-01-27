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