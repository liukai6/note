var fs = require('fs');

console.log('准备打开文件');
fs.stat('./lineFeed.txt',function(err,stats){
	if (err) {
		console(err);
	}
	console.log(stats);
	console.log("是否为一个文件:" + stats.isFile());
	console.log('文件的创建时间为:' + (stats.atime).toString());
});