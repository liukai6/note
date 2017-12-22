### 在php中那些值在类型转换为布尔值的情况
1.	int : 0;
2.	float：0.0；
3.	string：'0'，"", false ,  但是'0.0'、" "带空格的空字符串吗，转换都是true
4.	其他：false，null以及空数组都是false，只要是资源(resource)、对象(object)都是true
#### 我们需要注意的是在类型转换的时候把false的找出来,其余都为ture.这里面需要和js区分,和js的有一些区别.这里空数组为false.js中空数组为true.需要注意.
