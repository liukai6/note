### PHP魔术函数(方法)
PHP中被称为**"魔术方法"（Magic methods）**。在命名自己的类方法时不能使用这些方法名，除非是想使用其魔术功能。

* __construct()　　 实例化对象时被调用，当__construct和以类名为函数名的函数同时存在时，__construct将被调用，另一个不被调用。

* __destruct()　　  当删除一个对象或对象操作终止时被调用。

* __call()　　　　　 对象调用某个方法，若方法存在，则直接调用；若不存在，则会去调用__call函数。

* __get()　　　　   读取一个对象的属性时，若属性存在，则直接返回属性值；若不存在，则会调用__get函数。

* __set()　　　　    设置一个对象的属性时，若属性存在，则直接赋值；若不存在，则会调用__set函数。

* __toString()　　  打印一个对象的时被调用。如echo $obj;或print $obj;

* __clone()　　　    克隆对象时被调用。如：$t=new Test();$t1=clone $t;

* __sleep()　　　    serialize之前被调用。若对象比较大，想删减一点东东再序列化，可考虑一下此函数。

* __wakeup()　　   unserialize时被调用，做些对象的初始化工作。

* __isset()　　　    检测一个对象的属性是否存在时被调用。如：isset($c->name)。

* __unset()　　　　unset一个对象的属性时被调用。如：unset($c->name)。

* __set_state()　　调用var_export时，被调用。用__set_state的返回值做为var_export的返回值。

* __autoload()　　  实例化一个对象时，如果对应的类不存在，则该方法被调用。
