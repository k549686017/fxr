//点击购物车
$("#gouye").click(function(){
	if(getCookie("news")){
		window.location.href="car.html";
	}else{
		window.location.href="login.html";
	}
})

//选项卡
    var ali = document.querySelectorAll("main .main-b .cont li")
    var ap = document.querySelectorAll("main .main-b .msg div")

    for(var i=0;i<ali.length;i++){
        ali[i].index = i;
        ali[i].onclick = function(){
            for(var j=0;j<ali.length;j++){
                ali[j].className = "";
                ap[j].style.display = "none";
            }
            this.className = "active";
            ap[this.index].style.display = "block"
        }
    }

//加入购物车
class Goods{
    constructor(options){
        this.addEvent()
    }
    
    addEvent(){
    	var that=this;
    	var oadd=document.getElementById("addTo1");
    	oadd.onclick=function(){
    		if(getCookie("news")){
    			that.id = oadd.getAttribute("index");
                that.setGoods();
    		}else{
    			window.location.href="login.html";
    		}
    		
    	}
	}
    setGoods(){
        this.goods = getCookie("goods")==="" ? [] : JSON.parse(getCookie("goods"));
        if(this.goods.length < 1){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var onoff = true;
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id === this.id){
                    this.goods[i].num++;
                    onoff = false;
                    break;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
}

new Goods()


//放大镜

    var oSbox = document.querySelector(".s_box");
    var ospan = oSbox.children[1];
    var oBbox = document.querySelector(".b_box");
    var oBimg = oBbox.children[0];
    oSbox.onmouseover = function(){
        ospan.style.display = "block";
        oBbox.style.display = "block";
        oSbox.onmousemove = function(eve){
            var e = eve || window.event;
            var l = e.offsetX - ospan.offsetWidth/2;
            var t = e.offsetY - ospan.offsetHeight/2;
            if(l<0) l=0;
            if(t<0) t=0;
            if(l>oSbox.offsetWidth-ospan.offsetWidth){
                l=oSbox.offsetWidth-ospan.offsetWidth
            }
            if(t>oSbox.offsetHeight-ospan.offsetHeight){
                t=oSbox.offsetHeight-ospan.offsetHeight
            }
            ospan.style.left = l + "px";
            ospan.style.top = t + "px";
            var x = l/(oSbox.offsetWidth-ospan.offsetWidth);
            var y = t/(oSbox.offsetHeight-ospan.offsetHeight);
            oBimg.style.left = (oBbox.offsetWidth-oBimg.offsetWidth) * x + "px";
            oBimg.style.top = (oBbox.offsetHeight-oBimg.offsetHeight) * y + "px";
        }
    }

    oSbox.onmouseout = function(){
        ospan.style.display = "none";
        oBbox.style.display = "none";
    }