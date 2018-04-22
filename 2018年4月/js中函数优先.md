## 在js中函数声明和变量都会被提升,但是函数会被优先提升,然后才是变量
下面我们贴出我们的示例代码
```
foo();//1
var foo;
function foo() {
	console.log( 1 );
}
foo = function() {
	console.log( 2 );
}
```
我们使用js引擎会按照下面进行去理解
```
function foo() {
	console.log( 1 );
}
foo();//1
foo = function() {
	console.log( 2 );
}
```
这样仔细想一样,变量.函数声明,函数提升的先后顺序.
>函数>变量