## 在laravel中使用ORM
1.  首先一定要链接好数据库,不然一切都是空谈
2.  然后通过`artisan`命令创建Eloquent模型  
`php artisan make:model table_name`  
这里我们并没指明表和Eloquent ORM的对应关系,默认是单复数对应,对应到table_names上;同时你也可以修改table_name中`$table`属性.
3.  如果你想生成数据库迁移表需要添加参数:  
`php artisan make:model -m`或者是  
`php artisan make;model --migration`
4.  生成的迁移表中会带有时间戳参数,如果不想要可以添加属性`$timestamps`为false.
