class Car{
    constructor(options){
        this.cont = options.cont;
        this.load()
        this.addEvent()
    }
    load(){
    	var that=this;
       ajaxGet("data.json",function(res){
   		 that.res = eval(res)
   		 that.getCookie()
   		 })
    }
    getCookie(){
        this.goods = JSON.parse($.cookie("goods"));
        this.display()
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.goods[j].id === this.res[i].goodsId){
                    str += `<tr data-id="${this.res[i].goodsId}" >
                                <td class="valign"><img  src="${this.res[i].src}"/></td>
                                <td>${this.res[i].name}</td>
                                <td>${this.res[i].price}</td>
                                <td><input type="number" id="num" value="${this.goods[j].num}" min=1></td>
                                <td><em>删除</em></td>
                            </tr>`
                }
            }
        }
        this.cont.html(str);
    }
    addEvent(){
        var that = this;
        this.cont.on("click","em",function(){
            that.id = $(this).parent().parent().attr("data-id");
            $(this).parent().parent().remove();
            that.setCookie(function(index){
                that.goods.splice(index,1)
            })
        })
        this.cont.on("input","#num",function(){
            that.id = $(this).parent().parent().attr("data-id");
            that.num = $(this).val();
            that.setCookie(function(index){
                that.goods[index].num = that.num;
            })
        })
    }
    setCookie(cb){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                cb(i)
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
}
new Car({
    cont:$("tbody")
})