## 我们使用nodejs来获取文件鑫鑫
>fs.stat(path,callback)

### 参数的说明
*	path-文件名称
*	callback-回调函数,带有两个参数(err,stats)

fs.stat(path)执行后,会将stats类的实例返回给其回调函数.可以通过stats类中的方法来判断文件中的属性

### 下面我们准备一个实例
```
var fs = require("fs");

console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});
```
这样就可以打印文件的信息