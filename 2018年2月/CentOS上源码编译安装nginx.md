### 在CentOS7中安装nginx
#### 创建用户和组
```
//创建群组
groupadd nginx
//创建用户
useradd -s /sbin/nologin -g nigix -M nginx
```
#### 首先下载nginx源码包
我们cd到`/usr/local/src`
```
wget http://nginx.org/download/nginx-1.12.2.tar.gz
```
#### 接着我们解压文件,并进入解压后的文件夹
```
tar zxvf nginx-1.12.2.tar.gz
cd nginx-1.12.2
```
#### 安装各种依赖关系
```
yum install -y gc gcc gcc-c++ pcre-devel zlib-devel openssl-devel
```
#### 编译设置`.configure`
```
./configure --user=nginx --group=nginx --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_gzip_static_module
```
#### 安装
```
make && make install
```
#### 启动
```
cd /usr/local/nginx
sbin/nginx
```
#### 修改为全局变量
```
ln -s /usr/local/nginx/sbin/nginx /usr/sbin/nginx
```
