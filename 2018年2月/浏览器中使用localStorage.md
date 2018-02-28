### 浏览器中使用localStorage存储数据
#### 将数据存储到localStorage中
```
localStorage.setItem('myCat', 'Tom');
//需要注意存储的数据类型为字符串
```
#### 将数据从localStorage取出
```
var myCat = localStorage.getItem('myCat');
console.log(myCat);
```
#### 将数据从localStorage中删除
```
localStorage.removeItem('myCat');
```
**这里注意:删除的是该域名下的名字为myCat的数据**
