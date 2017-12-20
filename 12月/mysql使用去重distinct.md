### 在mysql中使用去重distinct
1.  在使用distinct我们需要主要distinct需要放置在查询字段的开头  
`select distinct name from user;`
2.  同时如果在后面跟多个字段的时候,关键词会对后面的所有字段生效.去求多个字段重复的,不能满足我们需求.
3. 这个时候我们可以配合group by来完成,下面我下有个例子:  
`select * count(distinct name) form user group by name;`  
上面的速度很快,比单纯的group by快很多
