const path = require("path"); //引入路径
const fs = require("fs"); //引入路径

console.log(path);
console.log(fs);
var routeDir = "./router";
var routerPath = path.join(__dirname, routeDir);
fs.readdir(routerPath, (err, files) => {
    if (err) {
        throw err;
    } else {
        console.log(files);
        if (files.length == 0) {
            console.log("无路由注册文件");
        } else {
            for (var i of files) {
                var router = path.join(__dirname, routeDir + "/" + i);
                app.use("/", require(router));
            }
        }
    }
});



/** 进阶版路由处理 
 * 引入文件系统fs,扫描router目录下的所有路由处理文件，并注册到app应用中。
 * 
 */// var index = require("./router/index");
// app.use("/", index);

