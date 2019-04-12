//点击购物车
define(function(){
	var og=document.getElementById("gouye")
	og.onclick=function(){
	if(getCookie("news")){
		window.location.href="car.html";
	}else{
		window.location.href="login.html";
	}
}
})
