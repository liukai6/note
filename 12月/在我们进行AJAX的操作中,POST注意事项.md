### 在AJAX中对POST请求中注意
1.  在我们进行AJAX请求,有两种的方式,一个是get请求,该请求比较简单.将参数拼接到URL上即可.并且不需要设置header头.
2.  在复杂的post的请求中,我们一定比对着get请求进行操作.一个是设置header头  

`xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");`  

再者就是**xmlhttp.send(data);**中的data需要和get请求中一样拼接成字符串键值的结构.
