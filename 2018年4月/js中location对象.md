## 在js中location的对象的属性
### hash
>'#contents'

返回url中hash(#)后面,如果url不包含散列,则返回空字符串
### host
>'www.host.com:80'

返回的是服务器名称和端口号(如果有)
### hostname
>'www.host.com'

返回的是不带端口号的服务器名称
### href
>'http://www.host.com'

返回的是当前加载页面的完整的url.而且location对象的toString()方法也返回这个值
### pathname
>'/path/'

返回URL中的目录和(或)文件名
### prot
>'8080'

返回url的端口号,如果url不包含端口号则返回空字符串
### protocol
>'http:'

返回页面使用的协议.通常是http:或者https:
### search
>'?q=name'

返回url查询字符串,这个字符串以问好