### 在进行AJAX请求需要注意POST的区别
在我们进行AJAX请求的过程中,GET请求是简单可行的.例如
`xmlhttp.open("GET","test1.txt",true);
xmlhttp.send();`
这是简单可行的,我们需要把有用的数据拼接到URL后面即可,就像这样:
`xmlhttp.open("GET","demo_get2.asp?fname=Bill&lname=Gates",true);
xmlhttp.send();`
但是遇到数据量超过了URL的承载量,我们就需要另外想想办法了,这个时候,我们要使用post请求
,但是post请求更加复杂,首先具体的格式如下:
`xmlhttp.open("POST","demo_post.asp",true);
xmlhttp.send();`
但是我们如果想让他像表单一样传送数据需要加上header头即可:
`xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");`
**xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");**注意就是这一行代码.
