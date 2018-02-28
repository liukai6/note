
```
console.log(getParam(name));
function getParam (name) {
              var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)','i');
              var r = window.location.search.substr(1).match(reg);
              if (r != null) {
                  return unescape(r[2]);
              }
              return null;
          }
```
**这样通过正则匹配的形式传入参数,获取相对应的值**
