//注销
$("#zhuxiao").on("click",function(){
	$.cookie("news",null);
})



//搜索框内容变换
$("#control").on("click","li",function(){
	console.log($(this).index())
	$(this).siblings().removeClass("active").end().addClass("active")
	switch($(this).index()){
		case 0 :
		       $("#search").attr("placeholder","请输入产品名称，例如：自动化、数控机床");break;
		case 1 :
		       $("#search").attr("placeholder","请输入店铺名称，关键词等");break;
	    case 2 :
		       $("#search").attr("placeholder","请输入求购标题，关键词等");break;
	}
})
//$("#control").children("li").removeAttr("placeholder").eq($(this).index()).click(function(){
//	switch($(this).index()){
//		case 0 :
//		       $("#search").attr("placeholder","请输入产品名称，例如：自动化、数控机床");break;
//		case 1 :
//		       $("#search").attr("placeholder","请输入店铺名称，关键词等");break;
//	    case 2 :
//		       $("#search").attr("placeholder","请输入求购标题，关键词等");break;
//	}
//})
//轮播图
$(".cont1").banner({
    items:$(".cont1").children(".imgbox").children("img"),
    left:$(".cont1").children(".btns").children("#left"),
    right:$(".cont1").children(".btns").children("#right"),
    list:$(".cont1").children(".list").children("span"),
    moveTime:200,
    autoPlay:true,
    delayTime:1000,
});

//通过ajax请求来的数据图片跳转
$(".floor-1-r").on("click","div",function(){
	console.log(this);
	switch($(this).index()){
		case 0 :
		       window.location.href = "detail-1.html" ;break;
		case 1 :
		       window.location.href = "detail-2.html" ;break;
	    case 2 :
		       window.location.href = "detail-3.html" ;break;
		case 3 :
		       window.location.href = "detail-4.html" ;break;
	}
	}
);
//二级菜单
$("#mytab").hover(
	function(){
		$("<div id='meng'></div>").appendTo($("#banner .li1"));
		$("#meng").css({
			'height': '484px',
			'width': '1000px',
			'background': '#f3f3f3',
			'position': 'absolute',
			'top': 0,
			'left': 199,
			'z-index': 50,
			'display':'block'
		})},
	function(){
		$("#meng").css("display","none")
		}
);

$("#mytab").on("mouseenter","li",function(){
	console.log($(this).index())
	
	$(this).children(".erji").stop().fadeIn(300);

});
$("#mytab").on("mouseleave","li",function(){
	console.log($(this).index())
	
	$(this).children(".erji").css("display","none")
}
);


//一行多列轮播图
 $(function () {  
         //下一张
         function moveLeft(){
                $(".gameTab ul").animate({marginLeft:"-120px"},1000, function () {  
                    $(".gameTab ul").children().first().appendTo($(".gameTab ul"));  
                    $(".gameTab ul").css('marginLeft','0px');  
                });  
            }
            $('.next').click(moveLeft);
 
          //前一张
            $('.prev').click(function () { 
             $(".gameTab ul").children().last().prependTo($(".gameTab ul"));//把ul的最后一个子元素添加到开头第一个
                $(".gameTab ul").css('marginLeft','-120px');  //初始化把ul的marginleft左移220
                $(".gameTab ul").animate({marginLeft:"0px"},1000);  
                   
            })  
 
            // 自动轮播
           var timer = setInterval(moveLeft,1000)
 
           //hover时停掉定时器
           $('.gameTab').mouseenter(function(){
            clearTimeout(timer)
           })
           $('.gameTab').mouseleave(function(){
            timer=setInterval(moveLeft,1000)
           })
            $('.yidong').mouseenter(function(){
            clearTimeout(timer)
           })
           $('.yidong').mouseleave(function(){
            timer=setInterval(moveLeft,1000)
           })
           
        })


//楼层
 $(function(){
            $("aside").children("ul").children("li").click(function(){
                $("html").stop().animate({
                    scrollTop:$(".floor").eq($(this).index()).offset().top  //$(this).index() 得到一个数值，即该this所指代的对象所在的索引值  
                })
            })
        })
