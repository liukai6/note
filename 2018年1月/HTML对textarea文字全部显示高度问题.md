### 在表单提交中textarea的高度问题
我们想让文字保持报读一直,这个时候我们需要的是读取textarea的scrollHeight属性的值.需要注意的是该值没有px.在稍后进行操作的时候需要进行拼接.
#### 具体代码实现如下
`var obj_name = document.getElementById('obj_id');
obj_name.setAttribute('style','height:' + obj_name.scrollHeight + "px");`
这样你看看是否已经完成效果了
