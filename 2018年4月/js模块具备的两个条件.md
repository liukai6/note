## 我们在编写js的模块注意的两个必要条件
1.	必须有外部封闭函数,该函数必须至少被调用过一次(每次调用都会创建一个新的模块实例).
2.	封闭函数必须返回至少一个内部函数,这样内部函数才能在私有作用域中形成闭包,并且可以访问或者修改私有的状态.
下面写个例子
```
function abcModule() {
	var something = 'abc';
	function doSomething() {
		console.log( something );
	}
}

var foo = abcModule();
foo.doSomething();//abc
```
这样就是一个模块