index.html:首页. 
           1.页头左边 有“登录”(login.html)“注册”(register.html)“注销”；右边“商品列表”(list.html)             
             账号：“sunzheng”密码“123456”
             登录成功1秒后跳转到首页，并且储存一个cookie，命名为news，记录登录状态
             当点击“注销”时，删除这个名为news的cookie
           2.点击搜索框上方的“搜产品”、“搜店铺”、“求购信息”，搜索框内的内容发生变化
           3.轮播图左边是二级菜单，右边是倒计时的秒杀功能；
           4.楼层在固定在页面右下角，其中1楼的4个商品是ajax请求的数据，点击后进入商品详情页

detail-1,detail-2,detail-3,detail-4:商品详情页
           5.放大镜,鼠标放在商品图片上时，出现放大镜效果
           6.选项卡，在图片下方是选项卡功能
           7.点击“加入购物车”，先判断有没有已经登陆的 cookie（名为news），如果有就存商品 goods的cookie，如果没有登录，则跳转到登录页面（login.html）
           8.点击“购物车”，如果没有登录跳转到登录页面（login.html），如果已经登陆则直接跳转到购物车页面（car.html） 


list.html：商品列表页面
           9.页面的数据渲染来自data.json

images和icon文件夹是各种图片的集合


gulp_jswen文件夹: list.js是list1和list2合并而来
                  es5.list.js是list.js es6转es5而来
                  hebinglist.min.js是es5.list.js压缩而来

模块化   在list.html中使用amd模块化功能