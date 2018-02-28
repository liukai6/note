#### js封装的向某个元素后添加元素
由于js没有现成的方法我们需要自己进行封装
```
function insertAfter ( newElement, targetElement ) {
            var parent = targetElement.parentNode;
            if ( parent.lastChild == targetElement ) {
                parent.a( newElement, targetElement );
            } else {
                parent.insertBefore ( newElement, targetElement.nextSibling );
            }
        }
```
