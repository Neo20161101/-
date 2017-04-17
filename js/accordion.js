
var _index6=0;
$(".flash4 ul li").mouseover(function(){
	_index6=$(this).index();
	$(this).stop().stop().animate({width:345},345).siblings("li").stop().animate({width:165},345);
	$(".imgCen").eq(_index6).css("display","block").siblings(".imgCen").css("display","none");
	$("p.bt_2").eq(_index6).css("display","block").siblings("p.bt_2").css("display","none");
	$(".imgTop img").eq(_index6).addClass("tm").siblings(".imgTop img").removeClass("tm");
});
$(".flash4 ul li").mouseout(function(){
	$(this).eq(_index6).stop().animate({width:165},345);
	$(".imgCen").css("display","none");6
});
$(".flash4 ul li").mouseout(function(){
	$(this).eq(_index6).stop().animate({width:165},345);
	$("p.bt_2").css("display","none");
});


