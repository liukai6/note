### PHP超全局变量（9个）
在php中有一种特殊的变量,那就是超全局变量.这里我们介绍这9个作用,最主要我们可以跨页面的访问.

PHP 中的许多预定义变量都是“超全局的”，这意味着它们在一个脚本的全部作用域中都可用。在函数或方法中无需执行 global $variable; 就可以访问它们。

* $GLOBALS　　储存全局作用域中的变量

* $_SERVER　　获取服务器相关信息

* $_REQUEST　　获取POST和GET请求的参数

* **$_POST**　　获取表单的POST请求参数

* **$_GET**　　获取表单的GET请求参数

* **$_FILES**　　获取上传文件的的变量

* $_ENV　　获取服务器端环境变量的数组

* **$_COOKIE**　　  浏览器cookie的操作

　设置cookie:setcookie(name, value, expire, path, domain);

　获取cookie：$_COOKIE["user"];

　删除cookie：setcookie("user", "", time()-3600);//设置过期时间

* **$_SESSION**　　服务端session的操作

　使用session前一定要session_start()启动session

　储存session：$_SESSION["name"]="King";//数组操作

　销毁session：unset($_SESSION["name"]);//销毁一个

　session_destroy()和unset($_SESSION);//销毁所有的session
