# 在window下安装mongoDB
我们已经将文件已经安装,但是怎么打开服务.安装官方文档,需要创建一个数据存储目录
`mkdir D:\data\db`
这个时候我们可以启动mongod.exe服务了
`mongod.exe --dbpath "D:\data\db"`
然后看下你创建的文件夹目录是否有了内容.记住要用管理员权限来运行
接下来我们连接mongoDB启动mongo.exe服务
`mongo.exe`
