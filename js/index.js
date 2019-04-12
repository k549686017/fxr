//请求数据
ajaxGet("data.json",function(res){
    json = eval(res)

    var olist = document.getElementById("floor-1-r")
    
    var str = "";
    for(var i=0;i<4;i++){
        str += '<div class="shangping"><img src="'+ json[i].src +'"/><p>'+ json[i].name +'</p></div>';
    }
    olist.innerHTML = str;
})


//倒计时
 function countDown(times){
  var timer=null;
  timer=setInterval(function(){
    var day=0,
      hour=0,
      minute=0,
      second=0;
    if(times > 0){
      day = Math.floor(times / (60 * 60 * 24));
      hour = Math.floor(times / (60 * 60)) - (day * 24);
      minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
      second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (day <= 9) day = '0' + day;
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    //
    var op=document.getElementById("mytime")
    op.innerHTML=day+"天:"+hour+"小时："+minute+"分钟："+second+"秒";
    times--;
    if(times<0){
    	var ocover=document.createElement("div");
    	ocover.setAttribute("id","cover");
    	ocover.innerHTML="活动结束"
    	var od=document.getElementById("banner-r");
    	
    	od.appendChild(ocover);
    clearInterval(timer);
  }
  },1000);
  
}   
    countDown(5)      
        


