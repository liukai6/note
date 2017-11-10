### linux文件互传
1.首先我们要保证网络是通的,ping一下就知道了
2.使用scp命名,就和本地使用cp命令一样简单
`scp root@[源机器ip]:[源机器文件及绝对路径] [目的路径]`
举个简单的例子:
`scp root@111.11.1.1:/usr/local/a.txt /usr/local`
这句话的意思,将ip为111.11.1.1下目录/usr/local下的a.txt复制到当前机器下/usr/local下