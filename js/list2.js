define(function(){
	//加载商品列表
class Goods{
    constructor(options){
        this.cont = options.cont;
        this.url = options.url;
        this.load()
        this.addEvent()
        this.gouWuche()
    }
    load(){
    	var that = this;
    	ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.display()
        })
    }
    display(){
        var str = "";
        this.res.forEach(function(value){
            str += `<div class="box" index="${value.goodsId}">
                        <img src="${value.src}">
                        <span>${value.price}</span>
                        <p>${value.name}</p>
                        <em>加入购物车</em>
                    </div>`;
        })
        this.cont.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.cont.addEventListener("click",function(eve){
        	if(getCookie("news")){
    			var e = eve || window.event;
           		var target = e.target || e.srcElement;
            	if(target.nodeName == "EM"){
	                that.id = target.parentNode.getAttribute("index");
	                that.setGoods()
           	    }
    		}else{
    			window.location.href="login.html";
    		}
            
        })
    }
    gouWuche(){
    	this.og=document.getElementById("gouye")
		this.og.onclick=function(){
			if(getCookie("news")){
				window.location.href="car.html";
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
new Goods({
    cont:document.getElementById("cont"),
    url:"data.json"
})

})
