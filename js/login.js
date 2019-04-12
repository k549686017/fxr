    function Login(options){
        this.btn = options.btn
        this.user = options.user
        this.pass = options.pass
        this.msg = options.msg
        this.url = options.url

        this.type = Math.random();

        this.init()
    }
    Login.prototype.init = function(){
        var that = this;
        this.btn.onclick = function(){
            that.load()
        }
    }
    Login.prototype.load = function(){
        var that = this;
        ajaxPost(this.url,{
            user:this.user.value,
            pass:this.pass.value
        }).then(function(res){
            switch(res){
                case "0":
                    that.msg.innerHTML = "用户名密码不符";
                    break;
                case "1":
                    that.msg.innerHTML = "登录失效，请重新登录";
                    break;
                default:
                    that.msg.innerHTML = "登录成功"
                    that.res  =JSON.parse(res);
                    console.log(that.res);
                    setCookie("news","login");
                    setTimeout(function(){
                    	window.location.href="index.html";
                    },1000)
            }
        },function(code){
            console.log("前端的ajax请求失败，有可能是网络原因或接口错误，或服务器问题，反正不一定是登录失败")
        })
    }
    new Login({
        btn:document.getElementById("btn"),
        user:document.getElementById("user"),
        pass:document.getElementById("pass"),
        msg:document.getElementById("msg"),
        url:"http://www.liyangyf.com/ctrl/login.php"
    })