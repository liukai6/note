## 在js中有一种有趣的现象叫做提升
具体的解释是在js变量和函数声明从他们代码中出现的位置被"移动"到了最上面,这个过程叫做提升.
下面是示例代码:
```
foo();
function foo() {
	console.log( a ); //undefined
	var a = 2;
}
```
实际的上面函数的执行顺序为
```
function foo() {
	var a;
	console.log( a );//undefined
	a = 2;
}
foo();
```
但是下面的代码更有意思
```
foo();//TypeError
bar();//ReferenceError
var foo = function bar() {
	//
}
```
其实上面代码经过升华后的样子应该是
```
var foo;
foo();//TypeError
bar();//ReferenceError
foo = function bar() {
	//
}